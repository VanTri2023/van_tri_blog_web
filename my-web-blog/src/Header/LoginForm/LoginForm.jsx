import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="overlay">
      <div className="login-form-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button
            type="button"
            className="cancel-button"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
