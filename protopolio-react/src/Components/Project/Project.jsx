import React, { useState } from "react";
import "./Project.css";

// Assets Imports
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
import weproject from '../../assets/we.png';
import ecoproject from '../../assets/eco.png';
import jestproject from '../../assets/jest.png';
import aaanproject from '../../assets/aaan.png';
import suwasewaproject from '../../assets/suwasewa.png';
import baproject from '../../assets/background.jpg';

const projects = [
  {
    title: "Multi9 Predictive Analytics",
    description: "Income & repair time forecasting system using data analytics.",
    role: "Full-stack Developer & Data Analyst",
    tools: "PHP, MySQL, Chart.js, Predictive Modeling",
    outcome: "Improved business decision-making by providing 90% accurate repair time forecasts.",
    img: aaanproject,
    github: "https://github.com/Chamodi27s/Predictive-Income-and-Repair-Time-Analytics-and-Forecasting-System-for-Multi9-Computer-Systems",
    tech: ["PHP", "MySQL", "Chart.js"],
    demo: null
  },
  {
    title: "LinkedIn Post Automation",
    description: "Automation script for LinkedIn post upload and interaction.",
    role: "QA Automation Engineer",
    tools: "Java, Selenium WebDriver, Maven",
    outcome: "Reduced manual posting time by 70% through automated script execution.",
    img: Lproject,
    github: "https://github.com/anu123538/java-selenium-automation-tests",
    tech: ["Java", "Selenium"],
    demo: null
  },
  {
    title: "Hotel Reservation Testing",
    description: "End-to-end automation and performance testing for hotel booking flows.",
    role: "QA & Performance Tester",
    tools: "Selenium, JMeter, Java",
    outcome: "Identified system bottlenecks and ensured stable booking under 500+ concurrent users.",
    img: amproject,
    github: "https://github.com/anu123538/Testing-Hotel-Reservation-System-using-Selenium-and-Jmeter",
    tech: ["Selenium", "JMeter", "Java"],
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7377605995453386752/"
  },
  {
    title: "Suwa Sewana Platform",
    description: "A comprehensive digital health services platform for medical appointments.",
    role: "Full-stack Developer and QA Tester",
    tools: "React, MongoDB, Node.js, Express, Selenium, JMeter, Playwright",
    outcome: "Streamlined the appointment process with 99.9% system stability.",
    img: suwasewaproject,
    github: "https://github.com/anu123538/Suwasewana-Appointment-System-Development-Testing",
    tech: ["React", "QA Automation"],
    demo: null
  },
  {
    title: "Education Dept. Performance Test",
    description: "Load and performance testing for the education department website.",
    role: "Performance Test Engineer",
    tools: "JMeter, Test Planning",
    outcome: "Optimized server response time by identifying high-latency API endpoints.",
    img: dproject,
    github: "https://github.com/anu123538/Education-Website-TestPlan-JMeter",
    tech: ["JMeter", "Performance Testing"],
    demo: null
  },
  {
    title: "Inventory Analysis App & Testing",
    description: "Mobile app for real-time inventory tracking and stock analysis.",
    role: "Mobile App Developer and Tester",
    tools: "Flutter, Firebase, Dart",
    outcome: "Enabled real-time stock tracking, reducing inventory errors by 40%.",
    img: fdproject,
    github: "https://github.com/anu123538/Inventory-and-analysis-mobile-app-and-test-it-manuallay",
    tech: ["Flutter", "Firebase"],
    demo: null
  },
  {
    title: "Smart AI Chatbot",
    description: "AI Chatbot developed using Python and OpenRouter API integration.",
    role: "Backend Developer",
    tools: "Python, Flask, OpenRouter API",
    outcome: "Enhanced user engagement by providing instant AI-driven responses.",
    img: sproject,
    github: "https://github.com/anu123538/smart_AI_chatbot",
    tech: ["Python", "Flask", "AI API"],
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7339884033809506305/" 
  },
  {
    title: "Daily Water Reminder",
    description: "Android health assistant app with smart notifications.",
    role: "Android Developer",
    tools: "Java, Android Studio, SQLite",
    outcome: "Successfully launched on mobile to help users maintain hydration goals.",
    img: baproject,
    github: "https://github.com/anu123538/Daily-Water-Reminder-Mobile-app",
    tech: ["Java", "Android"],
    demo: null
  },
  {
    title: "Weather Notifier",
    description: "Real-time weather notification app using OpenWeatherMap API.",
    role: "Python Developer",
    tools: "Python, OpenWeatherMap API, Flask",
    outcome: "Delivered accurate weather alerts via a lightweight web interface.",
    img: weproject,
    github: "https://github.com/anu123538/Weather--Notify-using-API",
    tech: ["Python", "API", "Flask"],
    demo: null
  },
  {
    title: "Eventrya Platform",
    description: "Full-stack event management system with ticket booking features.",
    role: "MERN Stack Developer",
    tools: "React, Node.js, MongoDB, Express",
    outcome: "Created a scalable event solution with secure booking logic.",
    img: evproject,
    github: "https://github.com/eventryaprojectPM",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7377601903159037952/"
  },
  {
    title: "E-Commerce Automation",
    description: "Automated regression testing suite for an e-commerce platform.",
    role: "QA Automation Engineer",
    tools: "React, pSelenium",
    outcome: "Ensured 100% bug-free checkout flow through automated tests.",
    img: ecoproject,
    github: "https://github.com/anu123538/Automated-Testing-e-commerce-website-using-selenium",
    tech: ["React", "playwright"],
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7417253804238192640/"
  },
  {
    title: "E-Commerce Cart Unit Testing",
    description: "Unit testing for shopping cart logic to ensure data integrity.",
    role: "SDET (Software Engineer in Test)",
    tools: "Jest, JavaScript",
    outcome: "Improved code reliability by achieving high test coverage for core logic.",
    img: jestproject,
    github: "https://github.com/anu123538/Testing-e-commerce-cart-using-jest",
    tech: ["Jest", "JavaScript", "Unit Testing"],
    demo: null
  },
  {
    title: "SMS Unit Testing",
    description: "Unit testing for Student Management System using JUnit.",
    role: "Backend QA Engineer",
    tools: "JUnit, Java",
    outcome: "Validated database operations to prevent data corruption issues.",
    img: jproject,
    github: "https://github.com/anu123538/Testing-Student-Management-System-using-JUNIT",
    tech: ["JUnit", "Java"],
    demo: null
  },
  {
    title: "Hotel Management System",
    description: "Desktop-based hotel management application for admin tasks.",
    role: "Desktop App Developer",
    tools: "Java, Swing, MySQL",
    outcome: "Digitized record-keeping, replacing manual paperwork for staff.",
    img: hproject,
    github: "https://github.com/anu123538/hotel_management_system-in-java",
    tech: ["Java", "Swing", "MySQL"],
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7338064748451676162/"
  },
  {
    title: "Attendance Management",
    description: "Web-based class attendance tracking system for schools.",
    role: "Web Developer",
    tools: "PHP, MySQL, Bootstrap",
    outcome: "Reduced attendance marking time by 50% for educational institutes.",
    img: cproject,
    github: "https://github.com/anu123538/class-attendance-management",
    tech: ["PHP", "MySQL", "Bootstrap"],
    demo: null
  },
  {
    title: "Arogya Medical Center",
    description: "Medical service booking and appointment management platform.",
    role: "Backend Developer",
    tools: "Python, Django, SQLite",
    outcome: "Built a robust administrative portal for managing medical staff.",
    img: aproject,
    github: "https://github.com/anu123538/Arogya-medical-center",
    tech: ["Python", "Django", "SQLite"],
    demo: null
  }
];

const ProjectCard = ({ proj }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img
          src={proj.img || "https://via.placeholder.com/350x200?text=Project+Preview"}
          alt={proj.title}
          loading="lazy"
        />
      </div>
      
      <div className="project-content">
        <h3>{proj.title}</h3>
        <p className="main-desc">{proj.description}</p>
        
        <button 
          className="details-toggle-btn" 
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details ▲" : "View Details ▼"}
        </button>

        {showDetails && (
          <div className="project-details animated-fade">
            <p><strong>Role:</strong> {proj.role}</p>
            <p><strong>Tools:</strong> {proj.tools}</p>
            <div className="outcome-text">
                <p><strong>Outcome:</strong> {proj.outcome}</p>
            </div>
          </div>
        )}

        <div className="tech-stack">
          {proj.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-button">
            <span>View Code</span>
            <svg className="github-icon" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          {proj.demo && (
            <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="demo-button">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="project-container">
      <div className="heading-wrapper">
        <h2 className="animated-heading">My Projects</h2>
        <div className="underline"></div>
      </div>
      
      <div className="project-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} proj={proj} />
        ))}
      </div>
    </div>
  );
};

export default Project;