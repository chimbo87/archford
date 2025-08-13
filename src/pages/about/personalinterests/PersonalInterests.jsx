import React from 'react';
import './PersonalInterests.css';

const PersonalInterests = () => {
  const interests = [
    {
      title: "Open Source Contributor",
      description: "I love contributing to open source projects and being part of the developer community.",
      icon: "💻",
      color: "#3b82f6" // blue-500
    },
    {
      title: "Tech Blogger",
      description: "Sharing knowledge through articles about React, JavaScript, and web development best practices.",
      icon: "✍️",
      color: "#10b981" // emerald-500
    },
    {
      title: "Photography Enthusiast",
      description: "Capturing moments and exploring creative composition in my free time.",
      icon: "📷",
      color: "#f59e0b" // amber-500
    },
    {
      title: "Mentorship",
      description: "Helping junior developers grow is one of my most rewarding activities.",
      icon: "🧑‍🏫",
      color: "#8b5cf6" // violet-500
    },
    {
      title: "Outdoor Adventures",
      description: "Hiking and nature walks help me recharge and find inspiration.",
      icon: "⛰️",
      color: "#ec4899" // pink-500
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks to expand my skill set.",
      icon: "📚",
      color: "#14b8a6" // teal-500
    }
  ];

  return (
    <section className="pi-container">
      <div className="pi-content">
        <div className="pi-header">
          <h2 className="pi-title">Beyond Code</h2>
          <div className="pi-divider"></div>
          <p className="pi-subtitle">What drives me and what I enjoy outside of development</p>
        </div>

        <div className="pi-grid">
          {interests.map((interest, index) => (
            <div 
              className="pi-card" 
              key={index}
              style={{ '--card-accent': interest.color }}
            >
              <div className="pi-card-icon" style={{ backgroundColor: interest.color }}>
                {interest.icon}
              </div>
              <h3 className="pi-card-title">{interest.title}</h3>
              <p className="pi-card-description">{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="pi-motivation">
          <h3 className="pi-motivation-title">What Drives Me as a Developer</h3>
          <p className="pi-motivation-text">
            I'm passionate about creating intuitive, accessible digital experiences that solve real problems. 
            The constant evolution of web technologies excites me, and I thrive on the challenge of turning 
            complex requirements into elegant solutions. For me, development is equal parts creative expression 
            and technical problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;