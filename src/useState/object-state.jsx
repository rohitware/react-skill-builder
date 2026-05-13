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
      return { ...previousState, color: "blue" };
    });
  };

  const updateModel = () => {
    setCar((previousState) => {
      return { ...previousState, model: "xyz" };
    });
  };
  return (
    <>
      <h1>Brand is : {car.brand}</h1>
      <p>
        it is {car.color} {car.model} and manufactured in {car.year}.
      </p>

      <button type="button" onClick={updateColor}>
        Update Color
      </button>
      <button type="button" onClick={updateModel}>
        Update model
      </button>
    </>
  );
}
