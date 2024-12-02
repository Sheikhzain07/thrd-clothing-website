import React, { useState } from "react";
import { loadCSV } from "../utils/dataHandler";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const users = await loadCSV("/users.csv");
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        onLogin(user);
      } else {
        setError("Invalid credentials, please use a correct credential");
      }
    } catch (err) {
      setError("Error loading user data");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;
