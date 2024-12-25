import { useState } from "react";

const UseStateObject = () => {
  const [movie, setMovie] = useState({
    title: "Spiderman",
    year: 2002,
    rating: 7.3,
  });

  const handleClick = () => {
    // const copyMovie = { ...movie, rating: 5 };
    // setMovie(copyMovie);
    setMovie({...movie, rating: 5});
  };
  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <p>Ratings: {movie.rating}</p>
      <button onClick={handleClick}>Change Rating</button>
    </div>
  );
};

export default UseStateObject;
