import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [myCar, setMyCar] = useState("Volvo");

  const HandleChange = (e) => {
    setName(e.target.value);
  };

  const HandleSelect = (e) => {
    setMyCar(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(name, myCar);
  };
  return (
    <>
      <h2>Forms:</h2>
      <form onSubmit={HandleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={HandleChange} />
        </label>
        <br />
        Slect Car:
        <select value={myCar} onChange={HandleSelect}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <br />
        <input type="submit" />
      </form>

      <p>Name: {name}</p>
      <p>Selected Car: {myCar}</p>
    </>
  );
}

export default MyForm;
