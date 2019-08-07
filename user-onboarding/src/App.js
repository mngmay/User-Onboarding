import React, { useState, useEffect } from "react";
import FormikOnboardingForm from "./components/Form";
import UsersList from "./components/UsersList";
import { Container } from "./components/Styles";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const statusUpdate = status => {
    if (status) {
      setUsers([...users, status]);
    }
  };

  return (
    <Container>
      <h1>Sign Up As User</h1>
      <FormikOnboardingForm
        users={users}
        setUsers={setUsers}
        statusUpdate={statusUpdate}
      />
      <h1>List of Users</h1>
      <UsersList users={users} />
    </Container>
  );
}

export default App;
