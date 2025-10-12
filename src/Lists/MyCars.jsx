import React from "react";

function MyCars() {
  const cars = ["Ford", "BMW", "Audi"];

  return (
    <>
      <h1>My Cars</h1>
      <ul>
        {cars.map((car) => (
          <li>{car}</li>
        ))}
      </ul>
    </>
  );
}

export default MyCars;
