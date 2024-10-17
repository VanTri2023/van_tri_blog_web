import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard_GenUser from './DashBoard/DashBoard_GenUser.jsx';
import DashBoardForAdmin from './DashBoard/DashBoardForAdmin.jsx';
import LoginForm from './DashBoard/Header/LoginForm/LoginForm.jsx';
import PostCreateEdit from './DashBoard/Post/PostCreateEdit.jsx';
import ManagerProfile from './DashBoard/ManagerProfile/ManagerProfile.jsx';
import Content from './DashBoard/Content/Content.jsx';
import ShowPostDetail from './DashBoard/Post/ShowPostDetail.jsx'
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
          <Route path="/" element={<DashBoard_GenUser />} />
          <Route path="admin" element={<DashBoardForAdmin />}>
            <Route path="PostContentList" element={<Post />} />
          </Route>
          <Route path="create-new-post/:blogId" element={<PostCreateEdit />} />
          <Route path="manage-profile" element={<ManagerProfile />}/>
          <Route path="Show-PostDetail/:showId" element={<ShowPostDetail/>}/>
        </Routes>

        {/* Hiển thị form đăng nhập nếu chưa đăng nhập */}
        {isLoggedIn && (
          <LoginForm onSubmit={handleLoginSuccess} onClose={() => {}} />
        )}
    </BrowserRouter>
  );
}

export default App;
