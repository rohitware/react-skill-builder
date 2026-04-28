import React, { useEffect } from "react";

function RunOnce() {
  useEffect(() => {
    console.log("Run only once");
  }, []);
  return (
    <>
      <h2>Hello</h2>
    </>
  );
}

export default RunOnce;
