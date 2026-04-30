import React, { useEffect, useState } from "react";

function IntervalExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const Interval = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);

    return () => {
      clearInterval(Interval);
      console.log("Interval clear");
    };
  }, []);

  return (
    <>
      <h2>count:{count}</h2>
    </>
  );
}

export default IntervalExample;
