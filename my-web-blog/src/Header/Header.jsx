import React, { useState } from 'react';
import HeaderStyle from './Header.module.css';

function Header() {
  const [placeholder, setPlaceholder] = useState("検索");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setPlaceholder("検索");
    }
  };

  const handleInputFocus = () => {
    setPlaceholder("");
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setPlaceholder("検索");
    }
  };

  const handleLogoClick = () => {
    // Thêm logic điều hướng tại đây
    // Hiện tại, không làm gì
  };

  return (
    <header className={HeaderStyle.header}>
      <button 
        onClick={handleLogoClick} 
        className={HeaderStyle.logoButton} 
        aria-label="Đi đến trang chính"
      >
        <img
          src="/blog-logo.png"
          alt="Blog Logo"
          className={HeaderStyle.logo}
        />
      </button>
      <div className={HeaderStyle.search_bar}>
        <div className={HeaderStyle.search_container}>
          <input
            className={HeaderStyle.search_input}
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button className={HeaderStyle.search_button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      </div>
      <button className="button">ログイン</button>
    </header>
  );
}

export default Header;
