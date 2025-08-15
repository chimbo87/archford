import React from 'react';
import './PersonalStory.css';

const PersonalStory = () => {
  return (
    <section className="personal-story">
      <div className="personal-story__container">
        {/* Header */}
        <div className="personal-story__header">
          <div className="personal-story__badge">My Journey</div>
          <h2 className="personal-story__title">
            From Curiosity to 
            <span className="personal-story__title-accent"> Code</span>
          </h2>
          <p className="personal-story__subtitle">
            Every great developer has a story. Here's mine.
          </p>
        </div>

        {/* Story Content */}
        <div className="personal-story__content">
          <div className="personal-story__visual">
            <div className="personal-story__avatar">
              <div className="personal-story__avatar-placeholder">
                <span>👨‍💻</span>
              </div>
              <div className="personal-story__avatar-glow"></div>
            </div>
            <div className="personal-story__code-snippet">
              <div className="personal-story__code-header">
                <div className="personal-story__code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="personal-story__code-title">my_journey.js</span>
              </div>
              <div className="personal-story__code-body">
                <div className="personal-story__code-line">
                  <span className="personal-story__code-keyword">const</span>
                  <span className="personal-story__code-variable"> myJourney</span>
                  <span className="personal-story__code-operator"> = </span>
                  <span className="personal-story__code-string">"amazing"</span>
                </div>
              </div>
            </div>
          </div>

          <div className="personal-story__text">
            <div className="personal-story__timeline">
              <div className="personal-story__timeline-item">
                <div className="personal-story__timeline-dot"></div>
                <div className="personal-story__timeline-content">
                  <h3 className="personal-story__timeline-title">The Spark</h3>
                  <p className="personal-story__timeline-text">
                    It all started with a simple "Hello, World!" program. What began as curiosity 
                    quickly transformed into a passion for creating digital solutions that make a difference.
                  </p>
                </div>
              </div>

              <div className="personal-story__timeline-item">
                <div className="personal-story__timeline-dot"></div>
                <div className="personal-story__timeline-content">
                  <h3 className="personal-story__timeline-title">The Learning Path</h3>
                  <p className="personal-story__timeline-text">
                    From late nights debugging code to building my first full-stack application, 
                    every challenge became a stepping stone to becoming a better developer.
                  </p>
                </div>
              </div>

              <div className="personal-story__timeline-item">
                <div className="personal-story__timeline-dot"></div>
                <div className="personal-story__timeline-content">
                  <h3 className="personal-story__timeline-title">The Mission</h3>
                  <p className="personal-story__timeline-text">
                    Today, I'm dedicated to crafting clean, efficient code and building applications 
                    that solve real problems while continuously learning and growing in this ever-evolving field.
                  </p>
                </div>
              </div>
            </div>

            <div className="personal-story__highlights">
              <div className="personal-story__highlight">
                <span className="personal-story__highlight-number">2+</span>
                <span className="personal-story__highlight-label">Years Coding</span>
              </div>
              <div className="personal-story__highlight">
                <span className="personal-story__highlight-number">15+</span>
                <span className="personal-story__highlight-label">Projects Built</span>
              </div>
              <div className="personal-story__highlight">
                <span className="personal-story__highlight-number">∞</span>
                <span className="personal-story__highlight-label">Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="personal-story__bg-elements">
          <div className="personal-story__bg-circle personal-story__bg-circle--1"></div>
          <div className="personal-story__bg-circle personal-story__bg-circle--2"></div>
          <div className="personal-story__bg-grid"></div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;