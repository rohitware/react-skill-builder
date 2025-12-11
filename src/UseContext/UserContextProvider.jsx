// import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function UserContextProvider() {
  // const [user, setUser] = useState("Rohit");
  return (
    <>
      <UserContext.Provider value={{ name: "Amar", age: 27 }}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
