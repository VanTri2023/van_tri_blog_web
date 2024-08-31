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
        {['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6'].map((menu, index) => (
          <li key={index} className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleMenuClick(index)}
            >
              {menu}
            </button>
            <ul className={`dropdown-menu ${openMenu === index ? 'show' : ''}`}>
              {index === 0 && (
                <>
                  <li className="dropdown-item">
                    <Link to="/m1-a" className="dropdown-link">Submenu 1 - A</Link>
                  </li>
                </>
              )}
              {index === 1 && (
                <>
                  <li className="dropdown-item">
                    <Link to="/submenu1" className="dropdown-link">Submenu 1</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/submenu2" className="dropdown-link">Submenu 2</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/submenu3" className="dropdown-link">Submenu 3</Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuBar;
