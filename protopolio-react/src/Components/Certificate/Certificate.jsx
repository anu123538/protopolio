import React from 'react'
import './Certificate.css';
import uiCertificate from '../../assets/ui.jpg';
import moCertificate from '../../assets/mo.png';
import tcertificate from '../../assets/t.png';
import cicertificate from '../../assets/ci.jpeg';
import hkcertificate from '../../assets/hk.jpeg';
import mlCertificate from '../../assets/ml.png';

const certificates = [
  {
    id: 1,
    title: "HACKBLAST COMPETITION",
    issuer: "IEEE",
    year: "2024",
    image: hkcertificate ,  // replace with your image paths
  },
  {
  id: 2,
    title: "Machine Learning &FPGAs",
    issuer: "IEEE",
    year: "2025",
    image: mlCertificate,
},
{
  id: 3,
    title: "Smart School Selector",
    issuer: "CINEC INTERNATIONAL RESEARCH SYMPOSIUM",
    year: "2024",
    image: cicertificate,
},
{
  id: 4,
    title: "Introduction of Testing and JUNIT ,Cucumber",
    issuer: "Skillup",
    year: "2025",
    image:tcertificate,
},

  {
    id: 5,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    year: "2023",
    image: moCertificate,
  },
  {
    id: 6,
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
      <h2>My certificates</h2>
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
