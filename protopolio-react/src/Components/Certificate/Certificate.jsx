import React from 'react'
import './Certificate.css';
import uiCertificate from '../../assets/ui.jpg';
import moCertificate from '../../assets/mo.png';


const certificates = [
  {
    id: 1,
    title: "HACKBLAST COMPETITION",
    issuer: "IEEE",
    year: "2024",
    image: "" ,  // replace with your image paths
  },
  {
  id: 2,
    title: "Machine Learning &FPGAs",
    issuer: "Great Learning",
    year: "2024",
    image: uiCertificate,
},
{
  id: 3,
    title: "Smart School Selector",
    issuer: "CINEC INTERNATIONAL RESEARCH SYMPOSIUM",
    year: "2024",
    image: "",
},
  {
    id: 4,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    year: "2023",
    image: moCertificate,
  },
  {
    id: 5,
    title: "UI/UX  For Beginners",
    issuer: "Great Learning",
    year: "2024",
    image: uiCertificate,
  },
  
  // Add more certificates here
];

const Certificate = () => {
  return (
    <section className="certificate-section">
      <h2>My Certifications</h2>
      <div className="certificate-grid">
        {certificates.map(({ id, title, issuer, year, image }) => (
          <div key={id} className="certificate-card">
            <img src={image} alt={`${title} certificate`} className="certificate-img" />
            <div className="certificate-info">
              <h3>{title}</h3>
              <p className="issuer">{issuer}</p>
              <p className="year">{year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
