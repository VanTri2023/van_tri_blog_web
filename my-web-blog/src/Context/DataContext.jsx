import React, { createContext, useState } from "react";

// Tạo DataContext
export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [valueContent, setValueContent] = useState("Welcome User");
    const [newValueContent, setnewValueContent] = useState({});
    const [postContent, setPostContent] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('ホーム'); // Thêm selectedCategory

    const updateValueName = (valuename) => {
        setValueContent(valuename);
    };

    const updateValueContent = (value) => {
        setnewValueContent(value);
    };

    const updatePostContent = (postData) => {
        setPostContent(postData);
    };

    const updateSelectedCategory = (category) => { // Thêm hàm cập nhật danh mục
        setSelectedCategory(category);
    };

    // Cung cấp các giá trị và hàm cập nhật thông qua context
    const contextValue = {
        valueContent,
        updateValueName,
        newValueContent,
        updateValueContent,
        postContent,
        updatePostContent,
        selectedCategory, // Cung cấp selectedCategory
        updateSelectedCategory, // Cung cấp hàm cập nhật danh mục
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
