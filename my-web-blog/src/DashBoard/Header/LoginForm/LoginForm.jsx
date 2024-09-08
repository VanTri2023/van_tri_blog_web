import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm({ onClose, onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === 'a') {
      if (onSubmit) {
        onSubmit({ username });
      }
      onClose();
      navigate('/admin');
    } else {
      alert('ユーザー名またはパスワードが間違っています!');
    }
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
              autoComplete="username"
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
              autoComplete="current-password"
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
