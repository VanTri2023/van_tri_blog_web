import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HTMLReactParser from 'html-react-parser';
import './ShowPostDetail.css';
import Header from '.././Header/Header.jsx';
import MenuBar from '.././MenuBar/MenuBar';
import Footer from '.././Footer/Footer.jsx';

const ShowPostDetail = () => {
    const [showBlogDetails, setShowBlogDetails] = useState({});
    const { showId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/GetPostByID/${showId}`)
            .then(response => {
                const postData = response.data;
                console.log("Post data:", postData); 
                setShowBlogDetails(postData);
            })
            .catch(error => {
                console.log(error);
            });
    }, [showId]);

    return (
      <>
         <Header />
      
        <MenuBar />
        <div className="container">
            {/* Main Content */}
            <main className="main-content">
                <div className="post-detail">
                    {/* Hiển thị ảnh đại diện */}
                    <div className='mainImage'>
                        <img 
                            src={showBlogDetails.mainImage} 
                            alt="Post Cover" 
                            className="post-image"
                        />
                    </div>
                    {/* Tên blog và tiêu đề bài viết */}
                    <div className='namBlog'>
                        <h1 className="post-title">{showBlogDetails.nameBlog}</h1>
                    </div>
                    <div className='namTitle'>
                        <h2 className="post-subtitle">{showBlogDetails.nameTitle}</h2>
                    </div>
                    {/* Danh mục bài viết */}
                    <div className='categoryMenu'>
                        <p className="category">{showBlogDetails.categoryMenu}</p>
                    </div>
                    {/* Nội dung bài viết */}
                    <div className='data-content'>
                        {console.log("newBlogContent:", showBlogDetails.newBlogContent)}  {/* Kiểm tra nội dung */}
                        {typeof showBlogDetails.newBlogContent === 'string' 
                            ? HTMLReactParser(showBlogDetails.newBlogContent) 
                            : null}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
        </>
    );
}

export default ShowPostDetail;
