import './Content.css';
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
function Content({ posts }) {
  const navigate = useNavigate();  // Sử dụng hook để điều hướng
  const handleViewPostDetail =  (id) => {
    navigate(`/Show-PostDetail/${id}`); 
  };
  return (
    <div className="grid-container">
      {posts.map((post) => (
        <div key={post.id} className="grid-item">
          <img src={post.mainImage} alt={post.nameBlog} className="post-image" onClick={()=>{handleViewPostDetail(post.id)}} />
          <h3 className="post-title" onClick={()=>{handleViewPostDetail(post.id)}}>{post.nameBlog} </h3>
          <p className="post-subtitle" onClick={()=>{handleViewPostDetail(post.id)}}>{post.nameTitle} </p>
        </div>
      ))}
    </div>
  );
}

export default Content;
