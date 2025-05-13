import React from "react";
import "./ClinicHistory.css";
import banner from "../../assets/aboutbanner.jpg";

const ClinicHistory = () => {
  return (
    <section className="history-section">
      <div className="history-container">
        <div className="history-content">
          <div className="section-header">
            <span className="section-label">Our Story</span>
            <h2>A Legacy of Compassionate Care</h2>
          </div>

          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>
                  Founded by Dr. S Maforo with a vision to provide
                  personalized, patient-centered healthcare in a community
                  setting.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Expanding Services</h3>
                <p>
                  Expanded our facility to include specialized departments for
                  pediatrics, cardiology, and advanced diagnostics.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Technology Integration</h3>
                <p>
                  Implemented state-of-the-art electronic health records and
                  telemedicine capabilities to enhance patient care.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Today's Excellence</h3>
                <p>
                  Now a premier healthcare provider with multiple locations,
                  serving over 50,000 patients annually with comprehensive care.
                </p>
              </div>
            </div>
          </div>

          <div className="founding-quote">
            <div className="quote-icon">"</div>
            <blockquote>
              Our clinic began with a simple belief: that every patient deserves
              personalized care delivered with compassion, respect, and clinical
              excellence.
            </blockquote>
            <div className="quote-author">
              <div className="author-name">Dr. S Maforo</div>
              <div className="author-title">Founder</div>
            </div>
          </div>
        </div>

        <div className="history-image">
          <div className="image-container">
            <div className="image-placeholder">
              <img src={banner} />
            </div>
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicHistory;
