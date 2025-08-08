import React from 'react'
import './Hero.css';
import profile_img from '../../../assets/profile_img.gif';

const Hero = () => {
  return (
    <div className='hero'>  
      <img src={profile_img} alt=""/>
      <h1><span>I'm Anuththara Imanshi, </span>Quality Assurance Engineer </h1>
      <p> I thrive on ensuring every detail meets the highest standards. With a strong foundation in software testing and a keen eye for detail.</p>
      <div className="hero-actiion">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero
