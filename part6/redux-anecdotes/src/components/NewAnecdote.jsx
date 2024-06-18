import {useDispatch} from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {

    const dispatch= useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        // console.log('content', content)
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        // const newAnecdote = await anecdoteService.createNew(content)
        // // console.log(newAnecdote)
        // dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification(`You created a new anecdote : ${content}`, 5))
    }
    return (
        <form onSubmit={addAnecdote}>
        <div>
            <input name='anecdote' />
        </div>
        <button type = 'submit'>create</button>
      </form>
    )
}

export default NewAnecdote