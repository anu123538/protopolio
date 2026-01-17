import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // close menu after clicking a link (mobile UX fix)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <h2>MyPortfolio</h2>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active-link' : ''}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active-link' : ''}>
            About Me
          </NavLink>
        </li>

        <li>
          <NavLink to="/certificate" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active-link' : ''}>
            Certificate
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active-link' : ''}>
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active-link' : ''}>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active-link' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <NavLink to="/contact" className="connect-btn" onClick={closeMenu}>
          Connect With Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
