import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>MyPortfolio</h2>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About Me</NavLink></li>
        <li><NavLink to="/certificate" className={({ isActive }) => isActive ? 'active-link' : ''}>Certificate</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active-link' : ''}>Skills</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
      </ul>

      <div className="nav-connect">
        <NavLink to="/contact" className="connect-btn">Connect With Me</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
