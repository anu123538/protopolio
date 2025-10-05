import React from 'react';
import './Skills.css';
import skillsImage from '../../assets/anu.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

const Skills = () => {
  return (
    <div className="Skills">
      <h1 className="skill-title">My Skills</h1>
      <img src={theme_pattern} alt="Theme Pattern" className="about-pattern" />

      <div className="skills-container">
        {/* ✅ Left side: Soft Skills */}
        <div className="skills-column animate-left">
          <h2>💡 Soft Skills</h2>
          <ul>
            <li>Attention to Detail</li>
            <li>Analytical Thinking</li>
            <li>Problem Solving</li>
            <li>Communication & Reporting</li>
            <li>Team Collaboration</li>
          </ul>
        </div>

        {/* ✅ Center: Image */}
        <div className="skills-column image-center animate-fade">
          <img src={skillsImage} alt="QA Skills Illustration" />
        </div>

        {/* ✅ Right side: Technical Skills */}
        <div className="skills-column animate-right">
          <h2>🛠 Technical Skills</h2>
          <ul>
            <li>Manual Testing</li>
            <li>Automated Testing (Selenium /Junit/Jmeter/Jest) </li>
            <li>Test Case Design & Execution</li>
            <li>Bug Tracking (JIRA, Bugzilla)</li>
            <li>White and Black box testing</li>
            <li>Performance Testing</li>
            <li>Test Management(TestRail)</li>
            <li>SQL / Database Testing</li>
            <li>API Testing (Postman)</li>
            <li>Version Control (Git)</li>
            <li>Agile & Scrum Methodologies</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
