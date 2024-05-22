import { useState } from 'react'
import Content from './components/Content'
import PersonForm from './components/PersonForm'
import Header from './components/Header'
import Filter from './components/Filter'


const App = () => {


  const [persons, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  console.log('persons :', persons)

  const addPerson = (event) => {
    event.preventDefault();
    // console.log('button clicked')

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1
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

  const handleNameFilter =(event) => {
    console.log('filter on :', event.target.value)
    setNewFilter(event.target.value)
    console.log('newFilter', newFilter)
    const regex = new RegExp( newFilter, 'i' );
    const filteredPersons = persons.filter((person) => person.name.match(regex))
    setPersons(filteredPersons)
    
    console.log('filteredpersons', filteredPersons)
  }



  return (
    <div>
      <Header text='Phonebook'/>
      <Filter onChange={handleNameFilter}></Filter>
      <Header text='Add a new'/>
      <PersonForm onSubmit = {addPerson} newName={newName} handleNameChange = {handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Header text ='Numbers'/>
      <Content persons={persons} />
    </div>
  )
}

export default App
