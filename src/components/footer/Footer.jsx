import { useState } from "react";
import "./Footer.css";
import { Divider } from "antd";
import { Import } from "lucide-react";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, you would send this to your API
      setSubscribed(true);
      setEmail("");
      // Reset the subscribed message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-about">
              <div >
                <h5 class="logo-text">MITRAL CLINIC</h5>
              </div>
              <Divider/>
              <p className="footer-tagline">
                At Mitral Clinic we are committed to excellence in medical care,
                we offer a wide range of services including general
                consultations, chronic disease management, maternal and child
                health, minor surgical procedures, and preventative screenings.
                We strive to deliver high-quality, accessible
                healthcare in a welcoming and respectful environment for
                individuals and families alike.
              </p>
          
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
             
                <li>
                  <a href="#">Health Resources</a>
                </li>
                <li>
                  <a href="/contact">Careers</a>
                </li>
              </ul>
            </div>

            <div className="footer-services">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="#">Family Medicine</a>
                </li>
                <li>
                  <a href="#">Pediatrics</a>
                </li>
                <li>
                  <a href="#">Cardiology</a>
                </li>
                <li>
                  <a href="#">Dermatology</a>
                </li>
                <li>
                  <a href="#">Physical Therapy</a>
                </li>
                <li>
                  <a href="#">Lab Services</a>
                </li>
                <li>
                  <a href="#">Medical Imaging</a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>Stay Updated</h3>
              <p>
                Subscribe to our newsletter for health tips and clinic updates.
              </p>

              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" aria-label="Subscribe">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
                {subscribed && (
                  <p className="success-message">Thank you for subscribing!</p>
                )}
              </form>

              <div className="footer-contact">
                <p>
                  <strong>Emergency:</strong> +26377 484 3841
                </p>
                <p>
                  <strong>Appointment:</strong> +26365 232 2251
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Mitral Clinic. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
