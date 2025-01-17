import { useState } from "react";

const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() => 
    Math.floor(Math.random() * 100)
  );

 const genarateNewRandomNumber = () => 
   setRandomNumber(Math.floor(Math.random() * 100));

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={genarateNewRandomNumber}>Genarate New Number</button>
    </div>
  );
};

export default ExampleTwo;
