import React from "react";
import { List } from "./Styles";

const UsersList = ({ users }) => {
  //   console.log("users in list", users);

  return (
    <List>
      {users.map(user => {
        return (
          <li key={Date.now()}>
            Name: {user.name} Role: {user.role}
          </li>
        );
      })}
    </List>
  );
};
export default UsersList;
