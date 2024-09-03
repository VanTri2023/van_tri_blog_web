import React from 'react';
//import './Content.css'; // Giả sử  có một file CSS cho Content

const postsPerPage = 8; // Số bài viết trên mỗi trang

const Content = ({ currentPage }) => {
  // Dữ liệu mẫu bài viết
  const samplePosts = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    title: `Bài viết ${index + 1}`,
    imageUrl: `https://via.placeholder.com/150?text=Post+${index + 1}`, // Hình ảnh đại diện
  }));

  const totalPosts = samplePosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const currentPosts = samplePosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="posts-grid">
      {currentPosts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.imageUrl} alt={post.title} className="post-image" />
          <h3 className="post-title">{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Content;
