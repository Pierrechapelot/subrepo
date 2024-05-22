import { useState } from 'react'
// import Person from './components/Person'
import Content from './components/Content'
import PersonForm from './components/PersonForm'

const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  console.log('persons :', persons)
  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked')
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject));
    // console.log('personObject', personObject);

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm onSubmit = {addPerson} newName={newName} handleNameChange = {handleNameChange}/>
      <h2>Numbers</h2>
      <Content persons={persons} />
    </div>
  )
}

export default App
