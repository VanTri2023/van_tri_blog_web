import React, { createContext, useState } from "react";

// Tạo DataContext
export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    // Biến lưu trữ nội dung text chào mừng người dùng
    const [valueContent, setValueContent] = useState("Welcome User");

    // Biến lưu trữ nội dung mới (kiểu object)
    const [newValueContent, setnewValueContent] = useState({});

    // Biến mới để lưu post content từ backend
    const [postContent, setPostContent] = useState({});

    // Hàm cập nhật giá trị của valueContent
    const updateValueName = (valuename) => {
        setValueContent(valuename);
    };

    // Hàm cập nhật giá trị của newValueContent
    const updateValueContent = (value) => {
        setnewValueContent(value);
    };

    // Hàm cập nhật giá trị của postContent từ backend
    const updatePostContent = (postData) => {
        setPostContent(postData);
    };

    // Cung cấp các giá trị và hàm cập nhật thông qua context
    const contextValue = {
        valueContent,
        updateValueName,
        newValueContent,
        updateValueContent,
        postContent, // Biến mới để lưu trữ post content
        updatePostContent, // Hàm để cập nhật post content
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
