import React, { useState } from "react";

const UseStateArrayOfObject = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", ratings: 4 },
    { id: 2, title: "Superman", ratings: 3 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "Batman" } : m))
    );
  };

  return (
    <div>
      <h1>UseState Array Of Object</h1>

      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handleClick}>change Name</button>
    </div>
  );
};

export default UseStateArrayOfObject;
