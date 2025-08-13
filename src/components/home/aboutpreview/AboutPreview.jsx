import React from 'react';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="about-preview" id="about-preview">
      <div className="about-preview__container">
        <div className="about-preview__content">
          <div className="about-preview__header">
            <span className="about-preview__subtitle">Get To Know Me</span>
            <h2 className="about-preview__title">About Me</h2>
            <div className="about-preview__divider"></div>
          </div>

          <div className="about-preview__grid">
            <div className="about-preview__visual">
              <div className="about-preview__image-container">
                <div className="about-preview__image-placeholder">
                  <svg width="120" height="120" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="about-preview__experience">
                  <div className="about-preview__experience-number">3+</div>
                  <div className="about-preview__experience-text">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="about-preview__text">
              <p className="about-preview__description">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                With a strong foundation in computer science and hands-on experience in building 
                scalable applications, I bring ideas to life with clean, efficient code.
              </p>
              
              <div className="about-preview__highlights">
                <div className="about-preview__highlight">
                  <svg width="20" height="20" fill="#10b981" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>Full Stack Development</span>
                </div>
                <div className="about-preview__highlight">
                  <svg width="20" height="20" fill="#10b981" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>Responsive Design</span>
                </div>
                <div className="about-preview__highlight">
                  <svg width="20" height="20" fill="#10b981" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>Problem Solving</span>
                </div>
                <div className="about-preview__highlight">
                  <svg width="20" height="20" fill="#10b981" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>UI/UX Focus</span>
                </div>
              </div>

              <a href="/about" className="about-preview__link">
                <span>Learn More</span>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;