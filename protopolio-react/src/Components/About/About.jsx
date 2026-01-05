import React from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.gif'; 

const About = () => {
  return (
    <div className="about-container">
      {/* Heading Section */}
      <div className="heading-wrapper">
        <h1 className="animated-heading">About Me</h1>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        {/* Left Side: Profile Image */}
        <div className="about-left">
          <div className="image-frame">
            <img src={profile_img} alt="Profile" className="profile-img" />
          </div>
        </div>

        {/* Right Side: Description and Refined Skills */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a <span>BSc Software Engineering</span> student at CINEC Campus and an aspiring 
              <span> QA Engineer</span>. I specialize in ensuring software excellence through 
              <b> Automated Testing</b> and <b>Performance Analysis</b>.
            </p>
            <p>
              With my background in <span>Full-stack Development</span>, I have a deep understanding 
              of how applications are built, which allows me to write more effective test cases 
              and identify bugs at the root level.
            </p>
          </div>

          <div className="skills-grid">
            {/* Primary Focus: QA Automation & Tools */}
            <div className="skill-category highlight">
              <h4>QA & Automation</h4>
              <div className="skill-item">
                <div className="skill-info"><span>Selenium | Playwright | TestNG</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>JMeter (Performance)</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Postman | API Testing</span><span>70%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>TestRail | Manual Testing</span><span>70%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "90%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>jest</span><span>80%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Git | GitHub | JUnit</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
            </div>

            {/* Secondary: Programming & Databases */}
            <div className="skill-category">
              <h4>Languages & Databases</h4>
              <div className="skill-item">
                <div className="skill-info"><span>Java | Python</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>SQL | MongoDB | Firebase</span><span>80%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>React | HTML | CSS</span><span>75%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "75%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Git | GitHub | JUnit</span><span>85%</span></div>
                <div className="skill-bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Section */}
      <div className="about-achievements">
        <div className="achievement-card">
          <h1>25+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="achievement-card">
          <h1>10+</h1>
          <p>Testing Frameworks</p>
        </div>
      </div>
    </div>
  );
};

export default About;