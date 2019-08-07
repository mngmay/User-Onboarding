import React from "react";
import { List } from "./Styles";

const UsersList = ({ users }) => {
  //   console.log("users in list", users);

  return (
    <List>
      {users.map(user => (
        <li key={Date.now()}>{user.name}</li>
      ))}
    </List>
  );
};
export default UsersList;
