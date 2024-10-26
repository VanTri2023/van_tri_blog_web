import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './ShowPostDetail.css'
import HTMLReactParser from 'html-react-parser'

const ShowPostDetail = () => {
    const [showBlogDetails, setshowBlogDetails] = useState({});
    const {showId} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:8080/GetPostByID/${showId}`)
        .then(response => {
          const postData = response.data;
          console.log("Post data:", postData); 
          setshowBlogDetails(postData);
        })
        .catch(error => {
            console.log(error);
          });
    },[]);
    

  return (
    <>
    <div className='mainImage'>
        <p>{showBlogDetails.mainImage}</p>
    </div>
    <div className='namBlog'>
        <p>{showBlogDetails.nameBlog}</p>
    </div>
    <div className='namTitle'>
        <p>{showBlogDetails.nameTitle}</p>
    </div>
    <div className='categoryMenu'>
        <p>{showBlogDetails.categoryMenu}</p>
    </div>
    <div className='data-content'>
      {console.log("newBlogContent:", showBlogDetails.newBlogContent)}  {/* Kiểm tra nội dung */}
      {typeof showBlogDetails.newBlogContent === 'string' 
      ? HTMLReactParser(showBlogDetails.newBlogContent) 
      : null}
      </div>
    </>
    
  )
}

export default ShowPostDetail