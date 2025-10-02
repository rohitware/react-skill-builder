import React from "react";

function Demo1() {
  const myElement = <h1>I Love JSX</h1>;

  const myElement1 = React.createElement("h1", {}, "I do not use JSX!");

  const myElement3 = <h1>React is {5 + 5} times better with JSX!</h1>;

  const myElement4 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

  return (
    <>
      {myElement}
      {myElement1}
      {myElement3}
      {myElement4}
    </>
  );
}

export default Demo1;
