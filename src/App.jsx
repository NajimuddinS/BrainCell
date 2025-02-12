import React, { useState, useEffect } from "react";
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  return (
    <div>
      <div className="heading">
        <h1>User List</h1>
      </div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search'
      />
      <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red",fontWeight:500 }}>{error}</p>}
      {!loading && !error && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                padding: "10px",
                margin: "10px",
                border: "1px solid #ddd",
                marginBottom: "2px",
                borderRadius: "4px",
              }}
            >
              <h3>{user.name}</h3> 
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default App;
