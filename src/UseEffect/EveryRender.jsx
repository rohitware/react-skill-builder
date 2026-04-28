import React from "react";
import { useEffect, useState } from "react";

function EveryRender() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component rerender");
  });
  return (
    <>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default EveryRender;
