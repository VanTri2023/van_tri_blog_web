import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard_GenUser from './DashBoard/DashBoard_GenUser.jsx';
import DashBoardForAdmin from './DashBoard/DashBoardForAdmin.jsx';
import LoginForm from './DashBoard/Header/LoginForm/LoginForm.jsx';
import PostDetail from './DashBoard/Post/PostDetail.jsx';
import ManagerProfile from './DashBoard/ManagerProfile/ManagerProfile.jsx';
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
          <Route path="/create-new-post" element={<PostDetail />} />
          <Route path="/manage-profile" element={<ManagerProfile />} />
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
