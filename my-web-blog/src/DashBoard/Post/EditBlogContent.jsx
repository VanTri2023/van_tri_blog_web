import React, { useContext, useRef, useMemo, useState, useEffect } from 'react';
import { DataContext } from '../../Context/DataContext';
import upload_area from '../../Images/upload_area.svg';
import { useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import './EditBlogContent.css';
import { request } from '../../axios_config';

const EditBlogContent = () => {
  const navigate = useNavigate();
  const contextData = useContext(DataContext);
  const blogContext = contextData.blogData; // Lấy dữ liệu blog từ DataContext
  const [mainImage, setMainImage] = useState(blogContext.mainImage || false); // Sử dụng hình ảnh từ dữ liệu blog

  useEffect(() => {
    console.log(blogContext); // Kiểm tra dữ liệu blog từ context
    setEditBlogDetails(blogContext); // Cập nhật nội dung blog khi dữ liệu context thay đổi
  }, [blogContext]);

  const [editBlogDetails, setEditBlogDetails] = useState({
    id: blogContext.id || "", // Thêm ID của blog
    nameBlog: blogContext.nameBlog || "",
    nameTitle: blogContext.nameTitle || "",
    mainImage: blogContext.mainImage || [],
    categoryMenu: blogContext.categoryMenu || "",
    newBlogContent: blogContext.newBlogContent || "",
  });

  const changeHandler = (e) => {
    setEditBlogDetails({ ...editBlogDetails, [e.target.name]: e.target.value });
  };

  const mainImageHandler = (e) => {
    setMainImage(e.target.files[0]);
  };

  const updateBlogContent = async () => {
    editBlogDetails.newBlogContent = content;
    editBlogDetails.mainImage = mainImage;
    let updatedBlog = editBlogDetails;
    let formDataBlog = new FormData();

    for (var key in updatedBlog) {
      formDataBlog.append(key, updatedBlog[key]);
    }

    await request(
      "POST",
      "/UpdatePostContent", 
      formDataBlog
    ).then((response) => {
      alert(response.data);
    });

    navigate("/admin/PostContentList");
  };

  const editor = useRef(null);
  const [content, setContent] = useState(blogContext.newBlogContent || ""); // Hiển thị nội dung blog từ context
  const config = useMemo(() => ({
    uploader: {
      "insertImageAsBase64URI": true
    }
  }), []);

  return (
    <>
      <div className='edit-blog-content'>
        <div className='bt-edit-blog'>
          <p>Edit Blog Content</p>
          <div className='bt-save'>
            <button>下書き保存</button>
            <button onClick={updateBlogContent}>更新</button> {/* Đổi tên nút thành 更新 */}
          </div>
        </div>
        <div className="edit-blog-itemfield">
          <p>Blog Name</p>
          <input value={editBlogDetails.nameBlog} onChange={changeHandler} type="text" name='nameBlog' placeholder='Enter Blog Name' />
        </div>
        <div className="edit-blog-itemfield">
          <p>Title Name</p>
          <input value={editBlogDetails.nameTitle} onChange={changeHandler} type="text" name='nameTitle' placeholder='Enter Title Name' />
        </div>
        <div className="edit-blog-itemfield">
          <label htmlFor="file-input">
            <p>Main Image</p>
            <img src={mainImage ? URL.createObjectURL(mainImage) : upload_area} className='blog-thumbnail-img' alt='mainImage' />
          </label>
          <input onChange={mainImageHandler} type="file" name='mainImage' id='file-input' hidden />
        </div>
        <div className="edit-blog-itemfield">
          <p>Category</p>
          <select value={editBlogDetails.categoryMenu} onChange={changeHandler} name="categoryMenu" className='edit-blog-selector'>
            <option value="">---- Select Category -----</option>
            <option value="menu1">Menu1</option>
            <option value="menu2">Menu2</option>
            <option value="menu3">Menu3</option>
            <option value="menu4">Menu4</option>
          </select>
        </div>
        <div className='blog-content'>
          <p>Content</p>
        </div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onChange={newContent => setContent(newContent)}
        />
      </div>
    </>
  );
};

export default EditBlogContent;
