import { useState, useEffect } from "react";
import axios from "axios";
import Content from "./components/Content";
import PersonForm from "./components/PersonForm";
import Header from "./components/Header";
import Filter from "./components/Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]); //personnes à afficher
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  // const [refresh, setRefresh] = useState(false)

  // console.log("persons :", persons);

  useEffect(() => {
    console.log("effect working");
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();
    // console.log('button clicked')

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + '1',
    };

    const existingName = persons.find(
      (person) => person.name === personObject.name
    );
    // console.log('existingname',existingName)
    if (existingName) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    }
    // console.log('personObject', personObject);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameFilter = (event) => {
    // console.log('filter on :', event.target.value)
    setNewFilter(event.target.value);
    // console.log('newFilter', newFilter)
  };

  const handleDelete = (id) => {
    personService.remove(id).then((returnedDeletedPerson) => {
      console.log('deletedperson', returnedDeletedPerson)
      setPersons(persons.filter((e) => e.id !== returnedDeletedPerson.id));
      // setRefresh(!refresh)
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <Header text="Phonebook" />
      <Filter onChange={handleNameFilter}></Filter>
      <Header text="Add a new" />
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Header text="Numbers" />
      <Content
        persons={persons.filter((person) =>
          person.name.match(new RegExp(newFilter, "i"))
        )} 
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
