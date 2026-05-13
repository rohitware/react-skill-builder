import React, { useState } from "react";

function ArrayState() {
  const [users] = useState(["Rohit", "Amar", "Rahul", "Raja"]);

  return (
    <>
      <h2> User List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}> {user}</li>
        ))}
      </ul>
    </>
  );
}

export default ArrayState;
