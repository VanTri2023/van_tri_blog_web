import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './DashBoard_GenUser.css';
import Content from './Content/Content.jsx';
import Header from './Header/Header.jsx';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import M1_A from './MenuBar/Menu_1/M1_A'; 
import Footer from './Footer/Footer.jsx';
import { DataContext } from '../Context/DataContext';

function DashBoard_GenUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [originalPosts, setOriginalPosts] = useState([]); // Thêm biến để lưu trữ toàn bộ bài viết ban đầu
  const { selectedCategory, updateSelectedCategory } = useContext(DataContext);
  const totalPosts = posts.length;
  const postsPerPage = 12;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getAllPosts();
    
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log("params:",params);
    const searchTerm = params.get("search");
    if (searchTerm) {
      console.log("searchTerm in User page:",searchTerm);
      filterPostsByKeyword(searchTerm);
    } else {
      console.log("selectedCategory:",selectedCategory);
      // Khi không có từ khóa, hiển thị bài viết theo danh mục
      filterPostsByCategory(selectedCategory);
    }
  }, [location.search, selectedCategory]);//

  const getAllPosts = () => {
    axios.get('http://localhost:8080/GetPostList_All')
      .then(response => {
        setPosts(response.data);
        setOriginalPosts(response.data); // Lưu trữ bài viết gốc
        
        
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };

  const filterPostsByKeyword = (keyword) => {
    console.log("searchTerm in filterPostsByKeyword:",keyword);
    const filtered = originalPosts.filter(post => 
      (post.nameBlog && post.nameBlog.includes(keyword)) || // Tìm trong nameBlog
      (post.nameTitle && post.nameTitle.includes(keyword)) || // Tìm trong nameTitle
      (post.newBlogContent && post.newBlogContent.includes(keyword)) // Tìm trong newBlogContent
    );
    console.log("originalPosts:",originalPosts);
    console.log("filtered:",filtered);
    setPosts(filtered);
    setCurrentPage(1); // Reset về trang đầu sau khi lọc
  };
  

  const filterPostsByCategory = (category) => {
    const filtered = originalPosts.filter(post => 
      category === 'ホーム' || post.categoryMenu === category
    );
    setPosts(filtered);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    console.log("selectedCategory:",category);
    updateSelectedCategory(category);
    setCurrentPage(1);
    if (category === 'ホーム') {
      navigate('/');
    } else {
      console.log("filterPostsByCategory:",category);

      filterPostsByCategory(category);
    }
  };

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
          posts={posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)} 
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
