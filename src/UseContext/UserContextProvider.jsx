import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function UserContextProvider() {
  const [user, setUser] = useState({
    name: "Amar",
    age: 27,
  });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
