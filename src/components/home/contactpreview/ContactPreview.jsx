import React from 'react';
import './ContactPreview.css';

const ContactPreview = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">Have a project in mind? Let's make it happen!</p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Your Name"
                required
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <input 
                type="email" 
                className="form-input" 
                placeholder="Email Address"
                required
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <textarea 
                className="form-textarea" 
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <div className="input-underline"></div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <div className="submit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;