// src/components/Footer.js
import React from 'react';
import './Style.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
