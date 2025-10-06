import React from "react";
import "./Project.css";
import sproject from '../../assets/s.png';
import Lproject from '../../assets/L.jpg';
import dproject from '../../assets/d.jpeg';
import hproject from '../../assets/h.png';
import aproject from '../../assets/a.jpg';
import cproject from '../../assets/c.jpeg';
import amproject from '../../assets/am.png';
import jproject from '../../assets/j.png';
import evproject from '../../assets/ev.png';
import fdproject from '../../assets/fd.png';

const projects = [
  {
    title: "Automation testing linkdln post upload using java selenium",
    description:
      "Automation script using Selenium for Linkdln post upload.",
    img: Lproject, // Empty image — fallback will be used
    github: "https://github.com/anu123538/java-selenium-automation-tests",
  },
  {
    title: "Automation testing hotelreservation system using selenium and JMETER",
    description: "Automation script using Selenium for hotel  reservation system.",
    img: amproject,
    github: "https://github.com/anu123538/Testing-Hotel-Reservation-System-using-Selenium-and-Jmeter",
  },
  {
    title: " Automation Testing education separtment website using JMETER",
    description: "Performance testing for eduaction department website using JMeter.",
    img:dproject,
    github: "https://github.com/anu123538/Education-Website-TestPlan-JMeter",
  },
  {
    title: "Smart AI Chatbot using openrouter API",
    description: "AI Chatbot using Python and Flask Using OpenAI API.",
    img: sproject,
    github: "https://github.com/anu123538/smart_AI_chatbot",
  },
  {
    title: "api",
    description: "AI Chatbot using Python and Flask Using OpenAI API.",
    img: "",
    github: "https://github.com/anu123538/smart_AI_chatbot",
  },
  {
    title: "Eventrya website",
    description: "Event management platform with user registration , event listings ,ticket booking and seat booking.",
    img: evproject,
    github: "https://github.com/eventryaprojectPM",
  },
  {
    title: "Hotel Management System",
    description: "Java-based hotel management application.",
    img: hproject,
    github: "https://github.com/anu123538/hotel_management_system-in-java",
  },
  {
    title: "E-commerce Website",
    description: "Full-featured e-commerce platform using React ",
    img: "",
    github: "https://github.com/anu123538/ecommerce-website",
  },
     {
    title: "Testing Student Management System using JUNIT",
    description: "Unit testing for student management system using JUNIT.",
    img:jproject ,
    github: "https://github.com/anu123538/Testing-Student-Management-System-using-JUNIT",
  },
  {
    title: "class attendence management system",
    description: "class attendence management system using php", 
    img: cproject,
    github: "https://github.com/anu123538/class-attendance-management",
  },
  {
    title: "Food Delivery website",
    description: "Food delivery platform with real-time tracking.",
    img: fdproject,
    github: "https://github.com/anu123538/projects",
  },
  {
    title: "Arogya Medical Website",
    description: "Medical services and appointment booking platform using python",
    img: aproject,
    github: "https://github.com/anu123538/Arogya-medical-center",
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
