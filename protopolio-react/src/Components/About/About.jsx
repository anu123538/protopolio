import React from 'react'
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";

import profile_img from '../../assets/profile_img.gif'; 
const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <img src={theme_pattern} alt="Theme Pattern" className="about-pattern" />
     
      
     <div className="about-section">
      
        
      
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>
            A third-year student studying BSc Software Engineering at CINEC Campus. I’m interested in software testing ,quality assurance and AI. I like finding bugs, writing test cases, and learning tools like Jira, Postman, JMeter, and JUnit. I’m excited to start my career as a QA Intern and gain real experience</p>
       </div>
        <div className="about-skills">
  <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
  <div className="about-skill"><p>React</p><hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>Java</p><hr style={{width:"80%"}} /></div>
  <div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
  <div className="about-skill"><p>Postman</p><hr style={{width:"40%"}} /></div>
  <div className="about-skill"><p>JMeter</p><hr style={{width:"80%"}} /></div>
  <div className="about-skill"><p>Java Selenium</p><hr style={{width:"80%"}} /></div>
  <div className="about-skill"><p>Test Case Writing</p><hr style={{width:"80%"}} /></div>
  <div className="about-skill"><p>Git & GitHub</p><hr style={{width:"80%"}} /></div>
  <div className="about-skill"><p>Sql</p><hr style={{width:"80%"}} /></div>
  <div className="about-skill"><p>Figma</p><hr style={{width:"70%"}} /></div>
  <div className="about-skill"><p>Jest</p><hr style={{width:"70%"}} /></div>
  <div className="about-skill"><p>Test Rail</p><hr style={{width:"80%"}} /></div>
  <div className="about-skill"><p>JUnit</p><hr style={{width:"80%"}} /></div>
</div>

      </div>
      <div className="about-acheievements">
         <div className="about-acheievement">
          <h1>25+</h1>
          <p>Projects Completed</p>

         </div>
         </div>
      </div>
  )
}

export default About
