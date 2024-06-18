import {useEffect} from 'react'
import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"
import Filter from './components/Filter'
import Notification from "./components/Notification"
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
  anecdoteService
    .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
}, [dispatch])

return (
  <div>
       <h2>Anecdotes</h2>
       <Notification/>
       <Filter/>
       <Anecdotes/>
       <h2>Create new</h2>
       <NewAnecdote/>
</div>
)
}








{/* {/* //   const anecdotes = useSelector(state => state)
//   const dispatch = useDispatch()

//   const vote = (id) => { */}
{/* //     console.log('vote', id)
//   }

//   return (
//     <div>
//       <h2>Anecdotes</h2>
//       {anecdotes.map(anecdote => */}
{/* //         <div key={anecdote.id}>
//           <div>
//             {anecdote.content}
//           </div>
//           <div>
//             has {anecdote.votes}
//             <button onClick={() => vote(anecdote.id)}>vote</button>
//           </div>
//         </div>
//       )}
//       <h2>create new</h2>
//       <form>
//         <div><input /></div>
//         <button>create</button>
//       </form>
//     </div> */}
//   


export default App