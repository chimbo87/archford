import React from 'react';
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import './ContactPreview.css';

const ContactPreview = () => {
  const [state, handleSubmit] = useForm("xyzpvwnr");

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#4BB543',
          color: '#fff',
        },
      });
    }
    if (state.errors && state.errors.length > 0) {
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#ff4444',
          color: '#fff',
        },
      });
    }
  }, [state.succeeded, state.errors]);

  return (
    <section className="contact-section">
      <Toaster />
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">Have a project in mind? Let's make it happen!</p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                id="name"
                type="text"
                className="form-input"
                placeholder="Your Name"
                name="name"
                required
                disabled={state.submitting}
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="Email Address"
                name="email"
                required
                disabled={state.submitting}
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                className="form-textarea"
                placeholder="Your Message"
                name="message"
                rows="5"
                required
                disabled={state.submitting}
              />
              <div className="input-underline"></div>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={state.submitting}
            >
              <span>
                {state.submitting ? (
                  <span className="submitting-text">
                    <span className="spinner"></span> Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </span>
              {!state.submitting && (
                <div className="submit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;