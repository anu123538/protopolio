import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
     
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/certificate">Certificate</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-connect">
        <Link to="/contact">Connect With Me</Link>
      </div>
    </div>
  )
}

export default Navbar;
