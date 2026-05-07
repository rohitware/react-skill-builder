import React, { useMemo, useState } from "react";

function UseMemoExample() {
  console.log("Component Rendered");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function expensiveCalculation(num) {
    let result = 0;
    console.log("Calculating...........");
    for (let i = 0; i < 1000000000; i++) {
      result = result + num;
    }
    return result;
  }

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Typing here won't trigger expensive calculation"
      />
    </>
  );
}

export default UseMemoExample;
