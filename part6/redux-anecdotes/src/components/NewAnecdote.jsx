import {useDispatch} from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = (anecdote) => {

    const dispatch= useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.value = ''

        dispatch(createAnecdote(content))
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