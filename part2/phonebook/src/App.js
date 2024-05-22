import { useState } from 'react'
import Content from './components/Content'
import PersonForm from './components/PersonForm'

const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  // const [showAllPersons, setShowAllPersons] = useState(true)

  console.log('persons :', persons)
  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked')
    const personObject = {
      name: newName
    }
  const existingName = persons.find((person) => person.name)
  if (existingName) {window.alert(`${newName} is already added to phonebook` )

  } else {
 
    setPersons(persons.concat(personObject));
  }
    // console.log('personObject', personObject);

  }

  // const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // const personsToShow = ;

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
