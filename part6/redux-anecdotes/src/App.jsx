import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"
import Filter from './components/Filter'
import Notification from "./components/Notification"


const App = () => {
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