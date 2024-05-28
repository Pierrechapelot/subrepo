import React from "react";
import Person from "./Person";

const Content = ({ persons, handleDelete }) => {
  // console.log(typeof(persons))
  // console.log('content log', persons)
  return (
    <ul>
      {persons.map((person, i) => (
        <Person key={i} person={person} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default Content;
