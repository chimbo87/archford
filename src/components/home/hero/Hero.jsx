// Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name-highlight">Archford N</span>
        </h1>
        <h2 className="hero-subtitle">Frontend Developer & UI Designer</h2>
        <p className="hero-tagline">
          Creating beautiful, functional digital experiences with modern web
          technologies
        </p>
        <div className="hero-cta-container">
          <button className="hero-cta-primary">View Projects</button>
          <button className="hero-cta-secondary">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;