import { useState, useEffect } from "react";
// import axios from "axios";
import Content from "./components/Content";
import PersonForm from "./components/PersonForm";
import Header from "./components/Header";
import Filter from "./components/Filter";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]); //personnes à afficher
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newSuccess, setNewSuccess] = useState("");

  useEffect(() => {
    console.log("effect working");
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  console.log("render", persons.length, "persons");

  const addPerson = (event, id) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + "1",
    };

    const existingPerson = persons.find(
      (person) => person.name === personObject.name
    );

    const updatedPerson = { ...existingPerson, number: newNumber };

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one ?`
        )
      ) {
        personService
          .update(updatedPerson.id, updatedPerson)
          .then((returnedPerson) => {
            console.log(`${returnedPerson.name} successfully updated`);
            console.log("returnedPerson", returnedPerson);
            console.log("updatedPerson", updatedPerson);
            const personWithoutExisting = persons.filter(
              (person) => person.name !== existingPerson.name
            );
            // setPersons(persons.map((person) => (person.id !== id ? person : returnedPerson)))
            // setPersons(persons.concat(updatedPerson))
            // setPersons(personWithoutExisting.concat(updatedPerson))
            setPersons([...personWithoutExisting, updatedPerson]);
          });
      }
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

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then((returnedDeletedPerson) => {
          setPersons(persons.filter((e) => e.id !== returnedDeletedPerson.id));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <Header text="Phonebook" />
      <Notification message={newSuccess}/>
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
        persons={persons
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((person) => person.name.match(new RegExp(newFilter, "i")))}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
