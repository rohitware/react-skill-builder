import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  function changeName() {
    setUser({
      ...user,
      name: "Rohit",
    });
  }

  return (
    <>
      <h1>Name: {user.name}</h1>

      <h1>Age: {user.age}</h1>

      <button onClick={changeName}>Change Name</button>
    </>
  );
}

export default Profile;
