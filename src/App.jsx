import React, { useState, useEffect } from "react";

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
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "5px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
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
                textAlign: "left",
              }}
            >
              <h3>{user.name}</h3> 
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
