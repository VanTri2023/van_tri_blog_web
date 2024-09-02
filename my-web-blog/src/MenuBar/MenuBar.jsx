import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

function MenuBar() {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

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

  const handleMenuClick = (menuIndex) => {
    setOpenMenu(openMenu === menuIndex ? null : menuIndex);
  };

  return (
    <nav className="menu-bar" ref={menuRef}>
      <ul className="menu-list">
        {['CI/CD', 'AWS', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6'].map((menu, index) => (
          <li key={index} className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleMenuClick(index)}
            >
            {menu}
            </button>
            {/* Hiển thị submenu chỉ cho Menu 5 và Menu 6 */}
            {index >= 4 && (
              <ul className={`dropdown-menu ${openMenu === index ? 'show' : ''}`}>
                <li className="dropdown-item">
                  <Link to={`/menu${index + 1}-submenu1`} className="dropdown-link">Submenu 1</Link>
                </li>
                <li className="dropdown-item">
                  <Link to={`/menu${index + 1}-submenu2`} className="dropdown-link">Submenu 2</Link>
                </li>
                <li className="dropdown-item">
                  <Link to={`/menu${index + 1}-submenu3`} className="dropdown-link">Submenu 3</Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuBar;
