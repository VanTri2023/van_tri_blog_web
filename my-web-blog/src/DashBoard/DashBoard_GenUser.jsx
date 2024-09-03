import React, { useState } from 'react';
import './DashBoard_GenUser.css';
import Content from './Content/Content.jsx'; // Import component Content

function DashBoard_GenUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = 20; // Số lượng bài viết tổng
  const postsPerPage = 8; // Số bài viết trên mỗi trang
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blog-body">
      <h2 className="blog-title">最近の記事</h2>
      <hr className="divider" />
      {/* Render component Content với prop currentPage */}
      <Content currentPage={currentPage} />
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashBoard_GenUser;
