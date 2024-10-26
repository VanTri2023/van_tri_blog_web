import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import './Post.css';
import axios from "axios";
import blogImage from '../../Images/blogImage.jpeg'


const Post = () => {
  const [listBlogFromDB,setlistBlogFromDB] = useState([]);
  const navigate = useNavigate();  // Sử dụng hook để điều hướng

  // Hàm xử lý khi nhấn nút "編集"
  const handleEditClick =  (id) => {
    navigate(`/create-new-post/${id}`); 
  };

  const handleViewPostDetail =  (id) => {
    navigate(`/Show-PostDetail/${id}`); 
  };

  const handleDeletePost = (id) => {
    axios.delete(`http://localhost:8080/deletePost/${id}`)
    .then(response => {
      alert(response.data);
      getAllPosts();
    })
    .catch(error => {
      console.log(error);
    });
   
  }
  const getAllPosts = () =>{
    axios.get('http://localhost:8080/GetPostList_All')
      .then(response => {
        setlistBlogFromDB(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      console.log(listBlogFromDB);
  }
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className='list-blog'>
      <h1>全てコンテンツ一覧</h1>
      <div className="posts-grid">
        {listBlogFromDB.map((post, index) => (
          <div key={index} className="listblog-format-main-info" >
            <p>{post.id}</p>
            <img src={blogImage} alt={post.nameBlog} className="post-image" onClick={()=>{handleViewPostDetail(post.id)}}/>
            <h3 className="post-title" onClick={()=>{handleViewPostDetail(post.id)}}>{post.nameBlog}</h3>
            <button className='bt-edit_remove' onClick={()=>{handleEditClick(post.id)}}>編集</button> 
            <button className='bt-edit_remove' onClick={()=>{handleDeletePost(post.id)}}>削除</button>  {/* Nút xóa */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
