import {useDispatch, useSelector} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({anecdote}) => {
    const dispatch = useDispatch()

    const voteHandler = () => {
        console.log('anecdote', anecdote)
      dispatch(addVote(anecdote))
      dispatch(setNotification(`You voted for '${anecdote.content}'`, 5))
    }
    return (
        <div>
            {anecdote.content}
            <div>has {anecdote.votes} <button onClick={voteHandler}>vote</button></div>
            
        </div>
    )
}

const Anecdotes = () => {
    
    const anecdotes = useSelector(({filter, anecdotes}) => {
        if (filter === null) {
            return anecdotes
        }
        const regex = new RegExp(filter, 'i')
        return anecdotes.filter(anecdote => anecdote.content.match(regex))
    })
    const byVotes = (a, b) => b.votes - a.votes
    
   
    return (
        <div>
            {[...anecdotes].sort(byVotes).map(anecdote => 
                <Anecdote
                key={anecdote.id}
                anecdote= {anecdote}
                handleClick={() => 
                    dispatch(addVote(anecdote.id))
                }/>
            )}
        </div>
    )
}

export default Anecdotes