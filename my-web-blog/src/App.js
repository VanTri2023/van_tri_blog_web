import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard_GenUser from './DashBoard/DashBoard_GenUser.jsx';
import DashBoardForAdmin from './DashBoard/DashBoardForAdmin.jsx';
import LoginForm from './DashBoard/Header/LoginForm/LoginForm.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<DashBoard_GenUser />} />
          <Route path="/admin" element={<DashBoardForAdmin />} />
        </Routes>

        {/* Hiển thị form đăng nhập nếu chưa đăng nhập */}
        {isLoggedIn && (
          <LoginForm onSubmit={handleLoginSuccess} onClose={() => {}} />
        )}
      </div>
    </Router>
  );
}

export default App;
