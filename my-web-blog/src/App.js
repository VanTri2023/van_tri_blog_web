import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard_GenUser from './DashBoard/DashBoard_GenUser.jsx';
import DashBoardForAdmin from './DashBoard/DashBoardForAdmin.jsx';
import LoginForm from './DashBoard/Header/LoginForm/LoginForm.jsx';
import PostDetail from './DashBoard/Post/PostDetail.jsx';
import ManagerProfile from './DashBoard/ManagerProfile/ManagerProfile.jsx';
import Content from './DashBoard/Content/Content.jsx';
import Post from './DashBoard/Content/Post.jsx';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<DashBoard_GenUser />} />
          <Route path="/admin" element={<DashBoardForAdmin />} >
            <Route path="PostContentList" element={<Post />} />
          </Route>
          
          <Route path="/create-new-post" element={<PostDetail />} />
          <Route path="/manage-profile" element={<ManagerProfile />} />
        </Routes>

        {/* Hiển thị form đăng nhập nếu chưa đăng nhập */}
        {isLoggedIn && (
          <LoginForm onSubmit={handleLoginSuccess} onClose={() => {}} />
        )}
    </BrowserRouter>
  );
}

export default App;
