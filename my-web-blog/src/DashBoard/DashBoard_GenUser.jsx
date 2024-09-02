import React, { useState } from 'react';
import './DashBoard_GenUser.css';

const postsPerPage = 8; // Số bài viết trên mỗi trang

// Dữ liệu mẫu bài viết
const samplePosts = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  title: `Bài viết ${index + 1}`,
  imageUrl: `https://via.placeholder.com/150?text=Post+${index + 1}`, // Hình ảnh đại diện
}));

function DashBoard_GenUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = samplePosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const currentPosts = samplePosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blog-body">
      <h2 className="blog-title">最近の記事</h2>
      <hr className="divider" />
      <div className="posts-grid">
        {currentPosts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.imageUrl} alt={post.title} className="post-image" />
            <h3 className="post-title">{post.title}</h3>
          </div>
        ))}
      </div>
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
