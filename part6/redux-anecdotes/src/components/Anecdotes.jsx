import {useDispatch, useSelector} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, handleClick}) => {
    return (
        <div>
            {anecdote.content}
            <div>has {anecdote.votes} <button onClick={handleClick}>vote</button></div>
            
        </div>
    )
}

const Anecdotes = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state=>state)
    const byVotes = (a, b) =>  b.votes - a.votes

    
    return (
        <div>
            {anecdotes.sort(byVotes).map(anecdote => 
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