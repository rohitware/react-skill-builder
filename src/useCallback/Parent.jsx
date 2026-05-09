import React, { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("Rendering");

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const searchUser = useCallback(() => {
    console.log("User Searching....");
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br /> <br />
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Child searchUser={searchUser} />
    </>
  );
}

export default Parent;
