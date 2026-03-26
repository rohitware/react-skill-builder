import React, { useState } from "react";

function InputBox() {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello {name}</h3>
    </>
  );
}

export default InputBox;
