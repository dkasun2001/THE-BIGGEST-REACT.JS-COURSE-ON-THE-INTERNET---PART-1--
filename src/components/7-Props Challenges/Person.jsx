import React from "react";

/* const Person = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </div>
  );
}; */

// array destructure

const Person = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};

export default Person;
