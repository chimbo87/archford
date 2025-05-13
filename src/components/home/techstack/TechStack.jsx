// TechStack.jsx
import React from "react";
import "./TechStack.css";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "HTML5", icon: "🖥️" },
    { name: "CSS3", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Git", icon: "🐙" },
    { name: "Figma", icon: "✏️" },
    { name: "TypeScript", icon: "🔷" },
  ];

  return (
    <section className="techstack-section">
      <h2 className="techstack-title">My Tech Stack</h2>
      <div className="techstack-grid">
        {technologies.map((tech, index) => (
          <div
            className="techstack-item"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="techstack-icon">{tech.icon}</span>
            <span className="techstack-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;