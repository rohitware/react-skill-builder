import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);
  return (
    <>
      <h1> Name: {user.name}</h1>
      <h1>age:{user.age}</h1>
    </>
  );
}

export default Profile;
