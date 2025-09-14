import React from 'react';
import './Hero.css';
import profile_img from '../../../assets/profile_img.gif';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/contact'); // Make sure /contact route exists
  };

  return (
    <div className='hero'>  
      <img src={profile_img} alt="Profile" />

      <h1>
        <span>I'm Anuththara Imanshi, </span>
        <span className="typing-animation">Quality Assurance Engineer</span>
      </h1>
      
      <div className="hero-action">
        <div className="hero-connect" onClick={handleConnectClick}>
          Connect With Me
        </div>

        <a href="/resume.pdf" download className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
