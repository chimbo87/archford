// ProfessionalSummary.jsx
import React from "react";
import "./ProfessionalSummary.css";

const ProfessionalSummary = () => {
  return (
    <section className="summary-section">
      <div className="summary-container">
        <div className="summary-content">
          <h2 className="summary-title">About My Expertise</h2>
          <p className="summary-text">
            I'm a passionate frontend developer with 3+ years of experience
            creating responsive, user-friendly web applications. My expertise
            lies in React ecosystem, modern JavaScript, and crafting beautiful
            interfaces that deliver exceptional user experiences.
          </p>
          <p className="summary-text">
            I specialize in transforming complex problems into simple, intuitive
            solutions that drive engagement and achieve business goals.
          </p>
          <button className="summary-button">Learn More About Me</button>
        </div>
        <div className="summary-decoration">
          <div className="summary-gold-box"></div>
          <div className="summary-pattern"></div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;