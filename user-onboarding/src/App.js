import React, { useState } from "react";
import FormikOnboardingForm from "./components/Form";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <FormikOnboardingForm users={users} setUsers={setUsers} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
