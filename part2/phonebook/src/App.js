import { useState } from 'react'
import Content from './components/Content'
import PersonForm from './components/PersonForm'

const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  console.log('persons :', persons)

  const addPerson = (event) => {
    event.preventDefault();
    // console.log('button clicked')

    const personObject = {
      name: newName,
      number: newNumber
    }
  const existingName = persons.find((person) => person.name === personObject.name)
  console.log('existingname',existingName)
  if (existingName) {window.alert(`${newName} is already added to phonebook` )

  } else {
 
    setPersons(persons.concat(personObject));
  }
    // console.log('personObject', personObject);

  }



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm onSubmit = {addPerson} newName={newName} handleNameChange = {handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Content persons={persons} />
    </div>
  )
}

export default App
