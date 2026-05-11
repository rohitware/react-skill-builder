import React, { useState } from "react";

export default function MyCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1995,
    color: "Red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blur" };
    });
  };
  return (
    <>
      <h1>Brand is : {car.brand}</h1>
      <p>
        it is {car.color} {car.model} and manufactur in {car.year}.
      </p>

      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
}
