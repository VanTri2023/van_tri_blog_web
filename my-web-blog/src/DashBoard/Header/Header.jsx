import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import HeaderStyle from './Header.module.css';

function Header() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const handleLoginClick = () => {
    setLoginFormVisible(true);
  };

  const handleCloseLoginForm = () => {
    setLoginFormVisible(false);
  };

  return (
    <header className={HeaderStyle.header}>
      <button 
        onClick={() => console.log("Logo clicked")} 
        className={HeaderStyle.logoButton} 
        aria-label="Go to homepage"
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
            placeholder="検索"
          />
          <button className={HeaderStyle.search_button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      </div>
      <button className={'button'} onClick={handleLoginClick}>
        ログイン
      </button>

      {isLoginFormVisible && (
        <LoginForm onClose={handleCloseLoginForm} />
      )}
    </header>
  );
}

export default Header;
