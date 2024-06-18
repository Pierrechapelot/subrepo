import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";


const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    // addVote(state, action) {
    //   const id = action.payload.id;
    //   console.log("action", action);
    //   const anecdoteToChange = state.find((n) => n.id === id);
    //   const changedAnecdote = {
    //     ...anecdoteToChange,
    //     votes: anecdoteToChange.votes + 1,
    //   };

    //   return state.map((anecdote) =>
    //     anecdote.id !== id ? anecdote : changedAnecdote
    //   );
    // },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    updatedAnecdotes(state, action) {
      return [...state.filter(n => n.id !== action.payload.id), action.payload]
    }
  },
});

export const { appendAnecdote, setAnecdotes, updatedAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const addVote = (anecdote) => {
  // console.log(anecdote)
  return async (dispatch) => {
    const updateAnecdote = await anecdoteService.update({...anecdote, votes : anecdote.votes +1})
    console.log('updateAnecdote', updateAnecdote)
    dispatch(updatedAnecdotes(updateAnecdote))
    // console.log('setAnecdotes(', setAnecdotes(updateAnecdote))
  }
}

export default anecdoteSlice.reducer;
