import React,{useContext} from 'react';
import { DataContext } from '../../Context/DataContext';
import './Post.css';

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
  const nameContent = valueName.valueContent;
  console.log(nameContent);

  return (
    <div className='list-blog'>
      <h1>Danh Sách Tất Cả Các Bài Viết </h1>
      <h1>{nameContent}</h1>
      <div className="listblog-format-main">
        <p>Số Thứ Tự</p>
        <p>Tên Chủ Đề</p>
        <p>Hình Ảnh Bài Blog</p>
        <p>Sữa Bài Blog</p>
        <p>Xoa Bài Blog</p>
      </div>
    <div className="posts-grid">
      {posts.map((post,index) => {
        return  <>
          <div key={index} className="listblog-format-main-info">
            <p>{post.id}</p>
            <h3 className="post-title">{post.title}</h3>
            <img src={post.imageUrl} alt={post.title} className="post-image" />
            <button className='bt-edit'>Edit Blog</button>
            <button className='bt-remove'>Remove Blog</button>
        </div>
        </>
      })}
    </div>
    </div>
  )
}

export default Post;
