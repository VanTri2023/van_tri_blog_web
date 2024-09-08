import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'; 

function Sidebar() {
  const navigate = useNavigate();

  const handleCreateNewPost = () => {
    navigate('/create-new-post'); 
  };

  const handleManageProfile = () => {
    navigate('/manage-profile');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handlePostContentList = () => {
    navigate('/PostContentList');
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
          <button onClick={handlePostContentList} className="sidebar-link">
            コンテンツ一覧
          </button>
        </li>
        <li className="sidebar-item">
          <button onClick={handleManageProfile} className="sidebar-link">
          プロフィール管理
          </button>
        </li>
        <li className="sidebar-item">
          <button onClick={handleLogout} className="sidebar-link">
          ログアウト
          </button>
        </li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
