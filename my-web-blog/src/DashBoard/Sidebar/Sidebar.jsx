import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'; 

function Sidebar() {
  const navigate = useNavigate();

  const handleCreateNewPost = () => {
    navigate('/create-new-post'); 
  };

  const handleManagePosts = () => {
    navigate('/manage-posts');
  };

  const handleAnalytics = () => {
    navigate('/analytics');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">管理</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <button onClick={handleCreateNewPost} className="sidebar-link">
            コンテンツの新規作成
          </button>
        </li>
        <li className="sidebar-item">
          <button onClick={handleManagePosts} className="sidebar-link">
            Quản lý bài viết
          </button>
        </li>
        <li className="sidebar-item">
          <button onClick={handleAnalytics} className="sidebar-link">
            Phân tích
          </button>
        </li>
        <li className="sidebar-item">
          <button onClick={handleSettings} className="sidebar-link">
            Cài đặt
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
