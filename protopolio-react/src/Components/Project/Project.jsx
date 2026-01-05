import React from "react";
import "./Project.css";
// කලින් තිබුණු imports
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
import baproject from '../../assets/background.jpg';
import aaanproject from '../../assets/aaan.png';
import suwasewaproject from '../../assets/suwasewa.png';

// අලුත් Project Images (මෙම නම් ඔයාගේ assets වල හැටියට වෙනස් කරගන්න)
// import predictImg from '../../assets/predict.png'; 
// import asuwaImg from '../../assets/asuwa.png';
// import inventoryImg from '../../assets/inventory.png';
// import waterImg from '../../assets/water.png';

const projects = [
  // --- 1. Predictive Analytics (මුලටම දැම්මා - ඉතා වැදගත්) ---
  {
    title: "Multi9 Predictive Analytics",
    description: "Income & repair time forecasting system using data analytics and predictive modeling.",
    img: aaanproject, // පසුව අදාළ image එක දාන්න
    github: "https://github.com/Chamodi27s/Predictive-Income-and-Repair-Time-Analytics-and-Forecasting-System-for-Multi9-Computer-Systems",
    tech: ["PHP", "MySQL", "Chart.js", "Forecasting"]
  },
  {
    title: "LinkedIn Post Automation",
    description: "Automation script using Selenium for LinkedIn post upload and interaction.",
    img: Lproject,
    github: "https://github.com/anu123538/java-selenium-automation-tests",
    tech: ["Java", "Selenium", "WebDriver"]
  },
  {
    title: "Hotel Reservation Testing",
    description: "End-to-end automation and performance testing for hotel booking flows.",
    img: amproject,
    github: "https://github.com/anu123538/Testing-Hotel-Reservation-System-using-Selenium-and-Jmeter",
    tech: ["Selenium", "JMeter", "Java"]
  },
  // --- 2. Asuwa Sewana (Development Knowledge පෙන්වන්න) ---
  {
    title: "suwa Sewana Platform",
    description: "Digital health services platform for medical appointments and patient records.",
    img:suwasewaproject, // පසුව අදාළ image එක දාන්න
    github: "https://github.com/SaduAmarasekara/suwasewana",
    tech: ["React", "MongoDB", "Node.js"]
  },
  {
    title: "Education Dept. Performance Test",
    description: "Load and performance testing for the education department website.",
    img: dproject,
    github: "https://github.com/anu123538/Education-Website-TestPlan-JMeter",
    tech: ["JMeter", "Performance Testing"]
  },
  // --- 3. Inventory Analysis (Mobile Testing Knowledge) ---
  {
    title: "Inventory Analysis App",
    description: "Flutter-based mobile app for real-time inventory tracking and stock analysis.",
    img: fdproject, // පසුව අදාළ image එක දාන්න
    github: "https://github.com/anu123538/inventory-analysis-flutter",
    tech: ["Flutter", "Firebase", "Dart"]
  },
  {
    title: "Smart AI Chatbot",
    description: "AI Chatbot developed using Python and OpenRouter API integration.",
    img: sproject,
    github: "https://github.com/anu123538/smart_AI_chatbot",
    tech: ["Python", "Flask", "AI API"]
  },
  // --- 4. Daily Water Reminder (Java/Mobile Knowledge) ---
  {
    title: "Daily Water Reminder",
    description: "Android health assistant app with smart notifications and intake tracking.",
    img: baproject, // පසුව අදාළ image එක දාන්න
    github: "https://github.com/anu123538/Daily-Water-Reminder-Mobile-app",
    tech: ["Java", "Android"]
  },
  {
    title: "Weather Notifier",
    description: "Real-time weather notification app using OpenWeatherMap API.",
    img: weproject,
    github: "https://github.com/anu123538/Weather--Notify-using-API",
    tech: ["Python", "API", "Flask"]
  },
  {
    title: "Eventrya Platform",
    description: "Full-stack event management system with ticket booking features.",
    img: evproject,
    github: "https://github.com/eventryaprojectPM",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "E-Commerce Automation",
    description: "Automated regression testing suite for an e-commerce platform.",
    img: ecoproject,
    github: "https://github.com/anu123538/Automated-Testing-e-commerce-website-using-selenium",
    tech: ["Java", "Selenium", "TestNG"]
  },
  {
    title: "E-Commerce Cart Unit Testing",
    description: "Unit testing for shopping cart logic to ensure data integrity.",
    img: jestproject,
    github: "https://github.com/anu123538/Testing-e-commerce-cart-using-jest",
    tech: ["Jest", "JavaScript", "Unit Testing"]
  },
  {
    title: "SMS Unit Testing",
    description: "Unit testing for Student Management System using JUnit framework.",
    img: jproject,
    github: "https://github.com/anu123538/Testing-Student-Management-System-using-JUNIT",
    tech: ["JUnit", "Java", "Testing"]
  },
  {
    title: "Hotel Management System",
    description: "Desktop-based hotel management application for admin tasks.",
    img: hproject,
    github: "https://github.com/anu123538/hotel_management_system-in-java",
    tech: ["Java", "Swing", "MySQL"]
  },
  {
    title: "Attendance Management",
    description: "Web-based class attendance tracking system for schools.",
    img: cproject,
    github: "https://github.com/anu123538/class-attendance-management",
    tech: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    title: "Arogya Medical Center",
    description: "Medical service booking and appointment management platform.",
    img: aproject,
    github: "https://github.com/anu123538/Arogya-medical-center",
    tech: ["Python", "Django", "SQLite"]
  }
];

const Project = () => {
  return (
    <div className="project-container">
      <div className="heading-wrapper">
        <h2 className="animated-heading">My Projects</h2>
        <div className="underline"></div>
      </div>
      
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={proj.img || "https://via.placeholder.com/350x200?text=Project+Preview"}
                alt={proj.title}
              />
            </div>
            
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              
              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-button">
                  <span className="btn-text">View Code</span>
                  <svg className="github-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;