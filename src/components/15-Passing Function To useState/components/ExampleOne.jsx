import React, { useState } from "react";

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // prevCount is the previous state value of count
  }


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default ExampleOne;
