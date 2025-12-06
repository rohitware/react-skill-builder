import React from "react";
import { useEffect } from "react";

function Interval() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval every 2 seconds");
    }, 2000);

    return () => clearInterval(intervalId); // cleanup interval
  }, []);
  return (
    <div>
      <h1>Timer Component Loaded</h1>
    </div>
  );
}

export default Interval;
