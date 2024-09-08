import React, { useState } from 'react';
import './DashBoard_GenUser.css';
import Content from './Content/Content.jsx'; // Import component Content
import Header from './Header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import M1_A from './MenuBar/Menu_1/M1_A'; 
import Footer from './Footer/Footer.jsx';

function DashBoard_GenUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = 20; // Số lượng bài viết tổng
  const postsPerPage = 8; // Số bài viết trên mỗi trang
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <div>
        <MenuBar />
        <Routes>
          <Route path="/m1-a" element={<M1_A />} />
        </Routes>
      </div>

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
      <Footer />
    </>
  );
}

export default DashBoard_GenUser;
