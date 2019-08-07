import React from "react";

const UsersList = ({ users }) => {
  console.log("users in list", users);
  return (
    <div>
      <h1>List of Users</h1>
      {users.map(user => (
        <li key={Date.now()}>{user.name}</li>
      ))}
    </div>
  );
};
export default UsersList;
