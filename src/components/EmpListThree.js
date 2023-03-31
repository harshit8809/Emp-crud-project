import React, { useState } from "react";

const EmpListThree = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "EmpListThree 1", email: "user1@e.com" },
    { id: 2, name: "EmpListThree 2", email: "user2@e.com" },
    { id: 3, name: "EmpListThree 3", email: "user3@e.com" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    const updatedUsers = [...users, newUserWithId];
    setUsers(updatedUsers);
    setNewUser({ name: "", email: "" });
  };

  const handleUpdateUser = () => {
    const updatedUsers = [...users];
    updatedUsers[selectedUser] = newUser;
    setUsers(updatedUsers);
    setNewUser({ name: "", email: "" });
    setSelectedUser(null);
  };

  const handleDeleteUser = () => {
    const updatedUsers = [...users];
    updatedUsers.splice(selectedUser, 1);
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <span>
              {user.name} ({user.email})
            </span>
            <button onClick={() => setSelectedUser(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Add or update user</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={newUser.name}
          onChange={(event) =>
            setNewUser({ ...newUser, name: event.target.value })
          }
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={newUser.email}
          onChange={(event) =>
            setNewUser({ ...newUser, email: event.target.value })
          }
        />
      </div>

      {selectedUser !== null ? (
        <div>
          <button onClick={() => setSelectedUser(null)}>Cancel</button>
          <button onClick={handleUpdateUser}>Update</button>
          <button onClick={handleDeleteUser}>Delete</button>
        </div>
      ) : (
        <button onClick={handleAddUser}>Add</button>
      )}
    </div>
  );
};

export default EmpListThree;
