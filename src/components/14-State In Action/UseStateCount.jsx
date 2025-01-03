import React, { useState } from "react";

const UseStateCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={increment}>Increment</button>

      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={decrement}>Decrement</button>

      {/* <button onClick={() => setCount(0)}>Reset</button> */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseStateCount;
