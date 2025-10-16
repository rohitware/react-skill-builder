import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increament
      </button>
    </>
  );
}

export default Counter;
