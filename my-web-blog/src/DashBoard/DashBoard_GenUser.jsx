import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './DashBoard_GenUser.css';
import Content from './Content/Content.jsx';
import Header from './Header/Header.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import M1_A from './MenuBar/Menu_1/M1_A'; 
import Footer from './Footer/Footer.jsx';
import { DataContext } from '../Context/DataContext'; // Import DataContext

function DashBoard_GenUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const { selectedCategory, updateSelectedCategory } = useContext(DataContext); // Sử dụng useContext
  const totalPosts = posts.length;
  const postsPerPage = 12;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    axios.get('http://localhost:8080/GetPostList_All')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleCategoryChange = (category) => {
    updateSelectedCategory(category); // Cập nhật danh mục qua context
    setCurrentPage(1); // Reset về trang 1 mỗi khi đổi category
    
    if (category === 'ホーム') {
      navigate('/'); // Điều hướng về trang chính
    }
  };

  const filteredPosts = posts.filter(post => 
    selectedCategory === 'ホーム' || post.categoryMenu === selectedCategory
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <div>
        <MenuBar onCategoryChange={handleCategoryChange} />
        <Routes>
          <Route path="/m1-a" element={<M1_A />} />
        </Routes>
      </div>

      <div className="blog-body">
        <h2 className="blog-title">最近の記事</h2>
        <hr className="divider" />
        
        <Content 
          posts={filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)} 
        />

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
