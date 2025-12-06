import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState("");

  // 🔁 Interval (runs repeatedly)
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       console.log("Interval every 2 seconds");
  //     }, 2000);

  //     return () => clearInterval(intervalId); // cleanup interval
  //   }, []);
  //   return <h1>Timer Component Loaded</h1>; // ✅ must return something

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
