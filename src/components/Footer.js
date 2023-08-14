import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/christinahoang32" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/help/linkedin/answer/a1338223/sign-up-to-join-linkedin?lang=en" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;