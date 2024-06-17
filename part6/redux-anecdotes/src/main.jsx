import ReactDOM from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { filterChange } from './reducers/filterReducer'
import { createAnecdote, addVote } from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
})


const store = createStore(reducer)

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('SET_FILTER'))
// store.dispatch(createAnecdote('combineReducers forms one reducer from many simple reducers'))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)