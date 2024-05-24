import React from "react";
import Person from "./Person";

const Content = ({ persons }) => {
  // console.log(typeof(persons))
  // console.log('content log', persons)
  return (
    <ul>
      {persons.map((person, i) => (
        <Person key={i} person={person} />
      ))}
    </ul>
  );
};

export default Content;
