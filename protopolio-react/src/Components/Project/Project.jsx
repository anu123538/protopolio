import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Automation testing linkdln post upload using java selenium",
    description:
      "Automation script using Selenium for Linkdln post upload.",
    img: "", // Empty image — fallback will be used
    github: "https://github.com/anu123538/java-selenium-automation-tests",
  },
  {
    title: "Selenium Automation for Instagram",
    description: "Automation script using Selenium for Instagram post upload.",
    img: "",
    github: "https://github.com/your-username/selenium-instagram-automation",
  },
  {
    title: " Automation Testing Demoblaze with JMeter",
    description: "Performance testing for Demoblaze website using JMeter.",
    img: "",
    github: "https://github.com/anu123538/Demoblaze-JMeter-Test-Plan",
  },
  {
    title: "Smart AI Chatbot using openrouter API",
    description: "AI Chatbot using Python and Flask Using OpenAI API.",
    img: "",
    github: "https://github.com/anu123538/smart_AI_chatbot",
  },
  {
    title: "Eventrya website",
    description: "Online flower shop with fresh delivery.",
    img: "",
    github: "https://github.com/eventryaprojectPM",
  },
  {
    title: "Hotel Management System",
    description: "Java-based hotel management application.",
    img: "",
    github: "https://github.com/anu123538/hotel_management_system-in-java",
  },
  {
    title: "E-commerce Website",
    description: "Full-featured e-commerce platform using React ",
    img: "",
    github: "https://github.com/anu123538/ecommerce-website",
  },
  {
    title: "Food Delivery website",
    description: "Food delivery platform with real-time tracking.",
    img: "",
    github: "https://github.com/anu123538/projects",
  },

];

const Project = () => {
  return (
    <div className="project-container">
      <h2 className="animated-heading">My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              <img
                src={
                  proj.img ||
                  "https://via.placeholder.com/350x150?text=No+Image"
                }
                alt={proj.title}
              />
            </a>
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
