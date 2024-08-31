import React from 'react';
import './Footer.css'; // Đảm bảo rằng bạn tạo tệp CSS tương ứng
import { FaEnvelope, FaLine, FaFacebook } from 'react-icons/fa'; // Sử dụng các biểu tượng từ react-icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/blog-logo.png" alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <div className="contact-me">
          <h3>Contact Me</h3>
          <div className="contact-icons">
            <a href="https://www.youtube.com/watch?v=CEzoEgnoGYs" target="_blank" rel="noopener noreferrer" className="contact-icon mail-icon">
              <FaEnvelope />
            </a>
            <a href="https://www.youtube.com/watch?v=CEzoEgnoGYs" target="_blank" rel="noopener noreferrer" className="contact-icon line-icon">
              <FaLine />
            </a>
            <a href="https://www.youtube.com/watch?v=CEzoEgnoGYs" target="_blank" rel="noopener noreferrer" className="contact-icon facebook-icon">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
