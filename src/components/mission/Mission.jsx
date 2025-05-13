import React from "react";

import project from "../../assets/images/homebanner.jpg";

import { useNavigate } from "react-router-dom";
import "./Mission.css";

function Mission() {
  const navigate = useNavigate();
  return (
    <section className="clinic-intro">
      <div className="container">
        <div className="intro-content">
          <h2>
            Welcome to <span className="highlight">Mitral Clinic</span>
          </h2>
          <p>
            Mitral Clinic, founded in 2000 by Dr. S. Maforo (MBChB, U.Z.), has
            been a trusted provider of compassionate, patient-focused healthcare
            for over two decades. Committed to excellence in medical care, we
            offer a wide range of services including general consultations,
            chronic disease management, maternal and child health, minor
            surgical procedures, and preventative screenings. At Mitral Clinic,
            we strive to deliver high-quality, accessible healthcare in a
            welcoming and respectful environment for individuals and families
            alike.
          </p>

          <a href="/about" className="btn-secondary">
            Learn More About Us
          </a>
        </div>
        <div className="intro-image">
          <img src={project} alt="Our medical team" />
        </div>
      </div>
    </section>
  );
}

export default Mission;
