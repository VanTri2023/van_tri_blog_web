import React ,{useRef,useMemo,useState,useEffect} from 'react'
import upload_area from '../../Images/upload_area.svg'
import {useNavigate, useParams} from 'react-router-dom';
import JoditEditor from 'jodit-react'
import './PostCreateEdit.css'
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar.jsx';

const PostDetail = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(""); 
  const [mainImage, setMainImage] = useState(false);
  const [newBlogDetails, setnewBlogDetails] = useState({
    nameBlog:"",
    nameTitle:"",
    mainImage:[],
    categoryMenu:"",
    newBlogContent:"",
  });
  
  const {blogId} = useParams();
  
  useEffect(() => {
    if(blogId ==='_Add') return;
    else{
      axios.get(`http://localhost:8080/GetPostByID/${blogId}`)
      .then(response => {
        const postData = response.data;
        setnewBlogDetails({
          nameBlog: postData.nameBlog || "",
          nameTitle: postData.nameTitle || "",
          mainImage: postData.mainImage || [],
          categoryMenu: postData.categoryMenu || "",
          newBlogContent: postData.newBlogContent || "",
        });
        setContent(postData.newBlogContent || "");
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [blogId]);
  
  const changeHandler = (e) => {
    setnewBlogDetails({...newBlogDetails,[e.target.name]:e.target.value});
  }
  
  const mainImageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMainImage(e.target.files[0]);
    }
  }

  const saveNewBlog = async () => {
    newBlogDetails.newBlogContent = content;
  
    // Tạo FormData và thêm các trường văn bản vào form data
    let formDataBlog = new FormData();
    formDataBlog.append("nameBlog", newBlogDetails.nameBlog);
    formDataBlog.append("nameTitle", newBlogDetails.nameTitle);
    formDataBlog.append("categoryMenu", newBlogDetails.categoryMenu);
    formDataBlog.append("newBlogContent", newBlogDetails.newBlogContent);
  
    // Thêm ảnh chính (mainImage) vào FormData trực tiếp
    if (mainImage) {
      formDataBlog.append("mainImage", mainImage);
    }
      // Check content of formDataBlog
    for (let [key, value] of formDataBlog.entries()) {
      console.log(key, value);
    }

    try {
      if (blogId === '_Add') {
        // Gọi API POST để tạo blog mới
        await axios.post("http://localhost:8080/PostCreateEdit", formDataBlog, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => alert(response.data));
      } else {
        // Gọi API PUT để cập nhật blog hiện có
        await axios.put(`http://localhost:8080/UpdatePostContent/${blogId}`, formDataBlog, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => alert(response.data));
      }
  
      navigate("/admin/PostContentList");
    } catch (error) {
      console.error("Error uploading blog:", error);
      alert("Error uploading blog. Please try again.");
    }
  };

  const editor = useRef(null);
 
  const config = useMemo(() => ({
    uploader: { "insertImageAsBase64URI": true },
    buttons: "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,file,image,spellcheck,cut,copy,paste,selectall,copyformat"
  }), []);

  return (
    <div className="post-create-edit-container">
      <Sidebar />
      <div className='addnewblog'>
        <div className='bt-addnewblog'>
          {blogId === '_Add' ? <p>Create New Blog</p> : <p>Edit Blog</p>}
          <div className='bt-save'>
            <button>下書き保存</button>
            <button onClick={saveNewBlog}>登録</button>
          </div>
        </div>
        <div className="addblog-itemfield">
          <p>Blog Name</p>
          <input value={newBlogDetails.nameBlog} onChange={changeHandler} type="text" name='nameBlog' placeholder='Enter Blog Name' />
        </div>
        <div className="addblog-itemfield">
          <p>Title Name</p>
          <input value={newBlogDetails.nameTitle} onChange={changeHandler} type="text" name='nameTitle' placeholder='Enter Blog Name' />
        </div>
        <div className="addblog-itemfield">
          <label htmlFor="file-input">
            <p>Hình Ảnh Chính</p>
            <img src={mainImage ? URL.createObjectURL(mainImage) : upload_area} className='addproduct-thumnail-img' alt='mainImage' />
          </label>
          <input onChange={mainImageHandler} type="file" name='mainImage' id='file-input' hidden/>
        </div>
        <div className="addblog-itemfield">
          <p>カテゴリー</p>
          <select value={newBlogDetails.categoryMenu} onChange={changeHandler} name="categoryMenu" className='add-blog-selector'>
            <option value="">----カテゴリー-----</option>
            <option value="CI/CD">CI/CD</option>
            <option value="Simulink Test">Simulink Test</option>
           { /*<option value="menu3">Menu3</option>
            <option value="menu4">Menu4</option>
           */}
          </select>
        </div>
        <div className='honbun'>
          <p>本文</p>
        </div>
        <JoditEditor 
          ref={editor} 
          value={content} 
          config={config}
          onChange={newContent => setContent(newContent)}
        />
      </div>
    </div>
  )
}

export default PostDetail;
