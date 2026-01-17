import React from 'react';
import './Skills.css';
import skillsImage from '../../assets/anu.jpg';

const Skills = () => {
  return (
    <div className="Skills" id='skills'>
      <div className="heading-wrapper">
        <h1 className="skill-title">Skills</h1>
        <div className="underline"></div>
      </div>

      <div className="skills-container">
        {/* Development Column */}
        <div className="skills-column animate-left">
          <h2>💻 Development</h2>
          <div className="tech-skills-grid">
            <div className="skill-group">
              <h4>Java & Desktop GUI</h4>
              <p>Core Java, <strong>Object-Oriented Programming (OOP)</strong>, Java Swing, Event Handling</p>
            </div>
            <div className="skill-group">
              <h4>Web Development</h4>
              <p>Java, Python, React.js, JavaScript (ES6+), PHP, HTML, CSS</p>
            </div>
            {/* ✅ අලුතින් එකතු කළ කොටස */}
            <div className="skill-group">
              <h4>Mobile App Development</h4>
              <p>Flutter, Dart, Android Development (Basics)</p>
            </div>
            <div className="skill-group">
              <h4>Backend & Database</h4>
              <p>Node.js (Basic), Python (Basic), MySQL, MongoDB (Basic)</p>
            </div>
          </div>
        </div>

        {/* Center Profile Image */}
        <div className="skills-column image-center animate-fade">
          <div className="image-border">
             <img src={skillsImage} alt="Profile" />
          </div>
        </div>

        {/* QA Column */}
        <div className="skills-column animate-right">
          <h2>🛡️ QA & Automation</h2>
          <div className="tech-skills-grid">
            <div className="skill-group">
              <h4>Automation Testing</h4>
              <p>Playwright, Selenium WebDriver, JUnit, Jest, JMeter</p>
            </div>
            <div className="skill-group">
              <h4>Tools & DevOps</h4>
              <p>JIRA (Basic), Postman (API), GitHub Actions (CI/CD), Agile & Scrum, TestRail</p>
            </div>
            <div className="skill-group">
              <h4>QA Methodology</h4>
              <p>Manual Testing, White & Black Box, Test Case Design, SDLC/STLC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="soft-skills-container animate-up">
        <h2 className="soft-title">💡 Personal Strengths</h2>
        <div className="soft-skills-grid">
          <div className="soft-skill-card">
            <h4>Analytical Thinking</h4>
            <p>Breaking down complex problems into manageable solutions.</p>
          </div>
          <div className="soft-skill-card">
            <h4>Problem Solving</h4>
            <p>Finding efficient ways to resolve bugs and system issues.</p>
          </div>
          <div className="soft-skill-card">
            <h4>Attention to Detail</h4>
            <p>Ensuring every test case and code block is flawless.</p>
          </div>
          <div className="soft-skill-card">
            <h4>Effective Reporting</h4>
            <p>Clear communication of bugs and project progress.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;