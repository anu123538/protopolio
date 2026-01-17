import React from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.gif'; 

const About = () => {
  return (
    <div className="about-container" id='about'>
      {/* Heading Section */}
      <div className="heading-wrapper">
        <h1 className="animated-heading">About Me</h1>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        {/* Left Side: Profile & GPA */}
        <div className="about-left">
          <div className="image-frame">
            <img src={profile_img} alt="Profile" className="profile-img" />
          </div>
          <div className="gpa-badge">
            <h3>GPA: 4.0 / 4.0</h3>
            <p>Academic Excellence</p>
          </div>
        </div>

        {/* Right Side: Description & Skills */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a <span>BSc (Hons) in Software Engineering</span> student at CINEC Campus, 
              maintaining a perfect <span>GPA of 4.0</span>. With a strong foundation in 
              <span> Full-stack Development</span>, I have transitioned my passion toward 
              <span> QA Engineering</span>, specializing in <b>Selenium Automation</b>.
            </p>
            <p>
              My dual expertise allows me to understand the root cause of bugs and deliver 
              robust, high-quality software solutions through efficient automated testing.
            </p>
          </div>

          <div className="skills-grid">
            {/* QA & API Testing Section */}
            <div className="skill-category">
              <h4>🛡️ QA & API Testing</h4>
              <div className="skill-item">
                <div className="skill-info"><span>Selenium WebDriver</span><span>90%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "90%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>JUnit (Java Testing)</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Playwright & Jest</span><span>80%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>API Testing (Postman)</span><span>70%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "70%" }}></div></div>
              </div>
              <div className="additional-tools">
                <span className="tool-tag">TestRail</span>
                <span className="tool-tag">JMeter</span>
              </div>
            </div>

            {/* Programming & Web Section */}
            <div className="skill-category">
              <h4>💻 Development & Languages</h4>
              <div className="skill-item">
                <div className="skill-info"><span>HTML</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
               <div className="skill-item">
                <div className="skill-info"><span>CSS</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Java</span><span>80%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Python</span><span>75%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "75%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>React</span><span>70%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "70%" }}></div></div>
              </div>
             
              <div className="additional-tools">
                <span className="tool-tag">SQL</span>
                <span className="tool-tag">PHP</span>
                <span className="tool-tag">Figma</span>
                <span className="tool-tag">Dart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Highlights with Numbers */}
      <div className="experience-highlights">
        <div className="exp-card">
          <div className="exp-icon">🛡️</div>
          <div className="exp-stat">10+</div>
          <h3>Testing Projects</h3>
          <p>End-to-end projects with Automation & Manual Testing.</p>
        </div>
        <div className="exp-card">
          <div className="exp-icon">📝</div>
          <div className="exp-stat">500+</div>
          <h3>Test Cases</h3>
          <p>Expertly designed Test Cases and comprehensive Bug Reports.</p>
        </div>
        <div className="exp-card">
          <div className="exp-icon">📱</div>
          <div className="exp-stat">05+</div>
          <h3>Dev Projects</h3>
          <p>Applications built using Flutter, React, and Java.</p>
        </div>
      </div>
    </div>
  );
};

export default About;