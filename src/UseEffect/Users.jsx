import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    loadUsers();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li>
            {user.id} {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
