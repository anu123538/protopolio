import React from 'react'
import './Certificate.css';

const certificates = [
  {
    id: 1,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    year: "2023",
    image: "",  // replace with your image paths
  },
  {
    id: 2,
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    year: "2023",
    image: "",
  },
  {
    id: 3,
    title: "Front-End Web Development using...",
    issuer: "DevTown",
    year: "2024",
    image: "",
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
