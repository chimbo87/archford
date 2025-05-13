import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Joint Commission Accreditation",
      description: "Nationally recognized symbol of quality reflecting commitment to meeting performance standards.",
      year: "Since 2010",
      icon: "🏅"
    },
    {
      id: 2,
      name: "NCQA Certification",
      description: "Recognition for excellence in healthcare quality and patient safety.",
      year: "Since 2015",
      icon: "🏆"
    },
    {
      id: 3,
      name: "CARF Accreditation",
      description: "International accreditation focusing on quality, value, and optimal outcomes of services.",
      year: "Since 2012",
      icon: "🌟"
    },
    {
      id: 4,
      name: "Patient-Centered Medical Home",
      description: "Recognition for coordinated care model focused on relationships with patients and their families.",
      year: "Since 2018",
      icon: "🏠"
    },
    {
      id: 5,
      name: "Healthcare Information Security Certification",
      description: "Certified compliance with healthcare data protection standards and practices.",
      year: "Since 2017",
      icon: "🔒"
    }
  ];

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <div className="section-header">
          <h2>Our Accreditations & Certifications</h2>
          <p>We are committed to maintaining the highest standards of medical care</p>
        </div>

        <div className="quality-statement">
          <div className="quality-icon">✓</div>
          <div className="quality-content">
            <h3>Our Quality Commitment</h3>
            <p>
              Our clinic maintains rigorous quality standards through continuous education, 
              regular audits, and adherence to evidence-based practices. We regularly 
              participate in certification programs to ensure we deliver the best possible care.
            </p>
          </div>
        </div>

        <div className="certifications-grid">
          {certifications.map(cert => (
            <div className="certification-card" key={cert.id}>
              <div className="certification-header">
                <div className="certification-icon">{cert.icon}</div>
                <div className="certification-year">{cert.year}</div>
              </div>
              <h3>{cert.name}</h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="learn-more">
          <p>Learn more about our quality standards and ongoing commitment to excellence</p>
          <button className="more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;