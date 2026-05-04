import React, { useRef } from "react";

function RefExample() {
  const countRef = useRef(0);

  function increase() {
    countRef.current++;

    console.log(countRef.current);
  }

  return (
    <>
      <h2>Ref Count: {countRef.current}</h2>

      <button onClick={increase}>Increase</button>
    </>
  );
}

export default RefExample;
