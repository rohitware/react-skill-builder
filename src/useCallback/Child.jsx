import React from "react";

function Child({ searchUser }) {
  console.log("Child Rendered");

  return (
    <>
      <button onClick={searchUser}>Search User</button>
    </>
  );
}

export default React.memo(Child);
