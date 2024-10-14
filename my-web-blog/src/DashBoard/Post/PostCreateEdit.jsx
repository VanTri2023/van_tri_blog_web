import React ,{useContext,useRef,useMemo,useState,useEffect} from 'react'
import { DataContext } from '../../Context/DataContext'
import upload_area from '../../Images/upload_area.svg'
import {useNavigate } from 'react-router-dom';
import JoditEditor from'jodit-react'
import './PostCreateEdit.css'
import { request } from '../../axios_config';
const PostDetail = () => {
  const navigate = useNavigate();
  const contextData = useContext(DataContext);
  const postContext = contextData.newValueContent;
  const [mainImage, setMainImage] = useState(false);

  useEffect(() => {
    console.log(postContext);
  }, []);

  const [newBlogDetails, setnewBlogDetails] = useState({
    nameBlog:"",
    nameTitle:"",
    mainImage:[],
    categoryMenu:"",
    newBlogContent:"",
  })

  const changeHandler = (e) =>{
    setnewBlogDetails({...newBlogDetails,[e.target.name]:e.target.value})
    }
  
    const mainImageHandler = (e) => {
      setMainImage(e.target.files[0]);
    }
    const saveNewBlog = async () =>{
      newBlogDetails.newBlogContent = content;
      newBlogDetails.mainImage = mainImage;
      let newBlog = newBlogDetails;
      let formDataBlog = new FormData();
    // formDataBlog.append("datablog",newBlog);
    // formDataBlog.append("mainImage", mainImage);
      for ( var key in newBlog ) {
        formDataBlog.append(key, newBlog[key]);
      }
    await request(
    "POST",
    "/PostCreateEdit",
    formDataBlog
    ).then((response)=>{
    alert(response.data);
    });
  
    //formDataBlog.append("mainImage", mainImage);
    //contextData.updateValueContent(formDataBlog);

    //for (const value of formDataBlog.values()) {
    //  console.log(value);
    //}
    // contextData.updateValueName(formDataBlog);
    navigate("/admin/PostContentList");
  }
  
  const editor = useRef(null);
    const [content, setContent] = useState("");
    const config =  useMemo(() => ({
      uploader: {
        "insertImageAsBase64URI": true
      }
    }), []);

  

  return (
    <>
     <div className='addnewblog'>
      <div className='bt-addnewblog'>
          <p>Create New Blog</p>
          <div className='bt-save'>
              <button>下書き保存</button>
              <button onClick={() =>{saveNewBlog()}} >登録</button>
          </div>
      </div>
      <div className="addblog-itemfield">
          <p>Blog Name</p>
          <input value={newBlogDetails.nameBlog} onChange={changeHandler}  type="text" name='nameBlog' placeholder='Enter Blog Name' />
     </div>
      <div className="addblog-itemfield">
        <p>Title Name</p>
        <input value={newBlogDetails.nameTitle} onChange={changeHandler} type="text" name='nameTitle' placeholder='Enter Blog Name' />
      </div>
      <div className="addblog-itemfield">
        <label htmlFor="file-input">
          <p>Hình Ảnh Chính</p>
          <img src={mainImage?URL.createObjectURL(mainImage):upload_area} className='addproduct-thumnail-img' alt='mainImage' />
        </label>
        <input onChange={mainImageHandler} type="file" name='mainImage' id='file-input' hidden/>
     </div>
      <div className="addblog-itemfield">
          <p>カテゴリー</p>
          <select  value={newBlogDetails.categoryMenu} onChange={changeHandler} name="categoryMenu" className='add-blog-selector'>
            <option value="">----カテゴリー-----</option>
            <option value="menu1">Menu1</option>
            <option value="menu2">Menu2</option>
            <option value="menu3">Menu3</option>
            <option value="menu4">Menu4</option>
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
       
    </>
  )
}

export default PostDetail