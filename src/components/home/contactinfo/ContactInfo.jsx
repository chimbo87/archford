// ContactInfo.jsx
import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  const socialLinks = [
    { name: "GitHub", url: "#", icon: "github" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Email", url: "#", icon: "envelope" },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              href={social.url}
              className="social-link"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${social.icon} social-icon`}></i>
              <span className="social-name">{social.name}</span>
            </a>
          ))}
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <span>San Francisco, CA</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone contact-icon"></i>
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <span>hello@yourportfolio.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;