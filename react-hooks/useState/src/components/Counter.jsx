import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 5);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Counter;
