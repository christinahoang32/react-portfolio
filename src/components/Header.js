import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Header.css'; 

const Navigation = () => (
  <nav>
    <HashLink smooth to="#about" activeClassName="active">About Me</HashLink>
    <HashLink smooth to="#resume" activeClassName="active">Resume</HashLink>
    <HashLink smooth to="#portfolio" activeClassName="active">Portfolio</HashLink>
    <HashLink smooth to="#contact" activeClassName="active">Contact Me</HashLink>
  </nav>
);

const Header = () => (
  <header>
    <h1>Christina Hoang</h1>
    <Navigation />
  </header>
);

export default Header;