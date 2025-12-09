import React from "react";
import { useRef } from "react";

function ClickCounter() {
  const countRef = useRef(0);
  const handleClick = () => {
    countRef.current++;
    console.log("Clicked", countRef.current);
  };
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default ClickCounter;
