import React, { useContext,useEffect,useState } from 'react';
import { Await, useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import { DataContext } from '../../Context/DataContext';
import './Post.css';
import axios from "axios";
const posts = [
  { id: 1, title: 'Chủ đề 1', imageUrl: 'https://via.placeholder.com/150?text=Post+1' },
  { id: 2, title: 'Chủ đề 2', imageUrl: 'https://via.placeholder.com/150?text=Post+2' },
  { id: 3, title: 'Chủ đề 3', imageUrl: 'https://via.placeholder.com/150?text=Post+3' },
  { id: 4, title: 'Chủ đề 4', imageUrl: 'https://via.placeholder.com/150?text=Post+4' },
  { id: 5, title: 'Chủ đề 5', imageUrl: 'https://via.placeholder.com/150?text=Post+5' },
  { id: 6, title: 'Chủ đề 6', imageUrl: 'https://via.placeholder.com/150?text=Post+6' },
  { id: 7, title: 'Chủ đề 7', imageUrl: 'https://via.placeholder.com/150?text=Post+7' },
  { id: 8, title: 'Chủ đề 8', imageUrl: 'https://via.placeholder.com/150?text=Post+8' },
  { id: 9, title: 'Chủ đề 9', imageUrl: 'https://via.placeholder.com/150?text=Post+9' },
  { id: 10, title: 'Chủ đề 10', imageUrl: 'https://via.placeholder.com/150?text=Post+10' },
  { id: 11, title: 'Chủ đề 11', imageUrl: 'https://via.placeholder.com/150?text=Post+11' },
  { id: 12, title: 'Chủ đề 12', imageUrl: 'https://via.placeholder.com/150?text=Post+12' },
  { id: 13, title: 'Chủ đề 13', imageUrl: 'https://via.placeholder.com/150?text=Post+13' },
  { id: 14, title: 'Chủ đề 14', imageUrl: 'https://via.placeholder.com/150?text=Post+14' },
  { id: 15, title: 'Chủ đề 15', imageUrl: 'https://via.placeholder.com/150?text=Post+15' },
  { id: 16, title: 'Chủ đề 16', imageUrl: 'https://via.placeholder.com/150?text=Post+16' },
  { id: 17, title: 'Chủ đề 17', imageUrl: 'https://via.placeholder.com/150?text=Post+17' },
  { id: 18, title: 'Chủ đề 18', imageUrl: 'https://via.placeholder.com/150?text=Post+18' },
  { id: 19, title: 'Chủ đề 19', imageUrl: 'https://via.placeholder.com/150?text=Post+19' },
  { id: 20, title: 'Chủ đề 20', imageUrl: 'https://via.placeholder.com/150?text=Post+20' },
];


const Post = () => {
  const valueName = useContext(DataContext);
  const nameContent = valueName.updateValueName;
  const [listBlogFromDB,setlistBlogFromDB] = useState([]);
  const [postContent,setPostContent] = useState({});

  const { updatePostContent } = useContext(DataContext); 
  const navigate = useNavigate();  // Sử dụng hook để điều hướng

  // Hàm xử lý khi nhấn nút "編集"
  const handleEditClick = async (id) => {
  await  axios.get(`http://localhost:8080/GetPostByID/${id}`)
    .then(response => {
      const postData = response.data;
      console.log("Post data:", postData); 
      updatePostContent(postData);  // Cập nhật dữ liệu vào DataContext
      navigate('/edit-post');  // Điều hướng đến trang PostCreateEdit
    })
    .catch(error => {
      console.log(error);
    });
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
      <h1>{nameContent}</h1>
      <h1>全てコンテンツ一覧</h1>
      <div className="posts-grid">
        {listBlogFromDB.map((post, index) => (
          <div key={index} className="listblog-format-main-info">
            <p>{post.id}</p>
            <img src={"https://via.placeholder.com/150?text=Post"} alt={post.nameBlog} className="post-image" />
            <h3 className="post-title">{post.nameBlog}</h3>
            <button className='bt-edit_remove' onClick={()=>{handleEditClick(post.id)}}>編集</button> 
            <button className='bt-edit_remove' onClick={()=>{handleDeletePost(post.id)}}>削除</button>  {/* Nút xóa */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
