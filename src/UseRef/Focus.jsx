import React, { useRef } from "react";

function Autofucus() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current = focus;
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

export default Autofucus;
