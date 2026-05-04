import React, { useRef, useState } from "react";

function UseStateVsUseRef() {
  // useState
  const [count, setCount] = useState(0);

  // useRef
  const countRef = useRef(0);

  // useState update
  function increaseState() {
    setCount(count + 1);
    console.log("UseState:", count);
  }

  // useRef update
  function increaseRef() {
    countRef.current++;
    console.log("Ref Value:", countRef.current);
  }

  return (
    <>
      <h2>useState Count: {count}</h2>

      <button onClick={increaseState}>Increase useState</button>

      <hr />

      <h2>useRef Count: {countRef.current}</h2>

      <button onClick={increaseRef}>Increase useRef</button>
    </>
  );
}

export default UseStateVsUseRef;
