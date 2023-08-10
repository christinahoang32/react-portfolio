import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/about" activeClassName="active">About Me</NavLink>
    {/* Add links for Portfolio, Contact, and Resume */}
  </nav>
);

const Header = () => (
  <header>
    <h1>Christina Hoang</h1>
    <Navigation />
  </header>
);

export default Header;