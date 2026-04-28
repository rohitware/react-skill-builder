import React, { useEffect, useState } from "react";

function Dependency() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Count changed", count);
  }, [count]);

  useEffect(() => {
    console.log("Name change", name);
  }, [name]);
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <br /> <br />
      <br />
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default Dependency;
