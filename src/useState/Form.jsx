import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age);
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
