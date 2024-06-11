import { useState } from "react";

const Forms = () => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInputValue(value);
    console.log(value);
  }

  return (
    <>
      <h1>{inputValue}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        value={inputValue}
      />
    </>
  );
};

export default Forms;
