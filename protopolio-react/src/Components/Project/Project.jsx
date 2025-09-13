import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Pet Therapy Website",
    description:
      "React + Spring Boot website with MongoDB for pet therapy booking.",
    img: "", // Empty image — fallback will be used
    github: "https://github.com/your-username/pet-therapy-website",
  },
  {
    title: "Selenium Automation for Instagram",
    description: "Automation script using Selenium for Instagram post upload.",
    img: "",
    github: "https://github.com/your-username/selenium-instagram-automation",
  },
  {
    title: "Supervised Learning Tool Chatbot",
    description: "A Python-based chatbot using supervised learning.",
    img: "",
    github: "https://github.com/your-username/supervised-chatbot",
  },
  {
    title: "Flower Shop Website",
    description: "Online flower shop with fresh delivery.",
    img: "",
    github: "https://github.com/your-username/flower-shop-website",
  },
  {
    title: "Student Showcase",
    description: "Platform to showcase student projects and portfolios.",
    img: "https://via.placeholder.com/350x150?text=Student+Showcase",
    github: "https://github.com/your-username/student-showcase",
  },
  {
    title: "Selenium Automation",
    description: "Another selenium automation project.",
    img: "",
    github: "https://github.com/your-username/selenium-automation",
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
