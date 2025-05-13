// ProjectsCarousel.jsx
import React, { useState } from "react";
import "./ProjectsCarousel.css";

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: "project1.jpg",
    },
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives",
      tags: ["HTML/CSS", "JavaScript", "GSAP"],
      image: "project2.jpg",
    },
    {
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality",
      tags: ["React", "Firebase", "Material UI"],
      image: "project3.jpg",
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-carousel">
        <button className="carousel-button prev" onClick={prevProject}>
          &lt;
        </button>
        <div className="carousel-track">
          {projects.map((project, index) => (
            <div
              className={`carousel-slide ${
                index === activeIndex ? "active" : ""
              }`}
              key={index}
            >
              <div className="project-card">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(https://placehold.co/600x400/1e1e1e/d4af37?text=${project.title})`,
                  }}
                ></div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span className="project-tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="project-button">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextProject}>
          &gt;
        </button>
      </div>
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;