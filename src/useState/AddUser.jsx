import React, { useState } from "react";

function AddUser() {
  const [users, setUsers] = useState(["Rohit", "Amar", "Rahul", "Raja"]);

  const addUser = () => {
    setUsers([...users, "Pranav"]);
  };

  return (
    <>
      <h1>User List:</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <button onClick={addUser}>Add User</button>
    </>
  );
}

export default AddUser;
