import React from "react";
import UserForm from "./component/userform"
import UserList from "./component/userlist"

function App() {
  return (
    <div className="container">
      <h1>User Manager</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
