import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuBar.css';
import { DataContext } from '../../Context/DataContext';

function MenuBar() {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { updateSelectedCategory } = useContext(DataContext); // Sử dụng useContext

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (menuIndex, category) => {
    if (category === 'ホーム') {
      console.log('category in menu bar:', category);
      console.log('menuIndex:', menuIndex);
      updateSelectedCategory(category);
      navigate('/'); // Điều hướng về trang chính
    } else {
      console.log('category in menu bar when not is a Home page:', category);
      console.log('menuIndex:', menuIndex);
      updateSelectedCategory(category); // Cập nhật danh mục qua context
      navigate('/');
    }
  };

  const menuItems = ['ホーム', 'CI/CD', 'Simulink Test', 'Menu 4', 'Menu 5', 'Menu 6'];

  return (
    <nav className="menu-bar" ref={menuRef}>
      <ul className="menu-list">
        {menuItems.map((menu, index) => (
          <li key={index} className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleMenuClick(index, menu)}
            >
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuBar;
