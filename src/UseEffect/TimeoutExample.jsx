import React, { useEffect } from "react";

function TimeoutExample() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Runs after 3 seconds");
    }, 3000);

    return () => {
      clearTimeout(timer);
      console.log("Timeout cleared");
    };
  }, []);

  return <h2>Timeout Example</h2>;
}

export default TimeoutExample;
