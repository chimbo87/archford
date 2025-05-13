import React from "react";
import "./Offer.css";
import {
  FaClock,
  FaUserMd,
  FaRegCreditCard,
  FaCalendarCheck,
} from "react-icons/fa";
import { BiSolidJoystickAlt } from "react-icons/bi";

function Offer() {
  return (
    <>
      <section className="offers-section">
        <div className="container">
          <div className="offers-header">
            <h2>Special Offers & Programs</h2>
            <p>
              Take advantage of our limited-time healthcare packages and
              wellness programs
            </p>
          </div>

          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-icon">
                <FaClock />
              </div>
              <h3>Same-Day Appointments</h3>
              <p>
                Urgent care when you need it most. Book online and be seen
                within hours.
              </p>
              <div className="offer-badge">Available Now</div>
              <a href="/contact" className="offer-button">
                Book Today
              </a>
            </div>

            <div className="offer-card featured">
              <div className="offer-tag">Most Popular</div>
              <div className="offer-icon accent">
                <FaUserMd />
              </div>
              <h3>Annual Health Assessment</h3>
              <p>
                Comprehensive check-up with lab tests and specialist
                consultation at 30% off.
              </p>
              {/* <div className="offer-price">
                <span className="original-price">$299</span>
                <span className="discount-price">$209</span>
              </div> */}
              <a href="/services" className="offer-button primary">
                Learn More
              </a>
            </div>

            <div className="offer-card">
              <div className="offer-icon">
                <FaRegCreditCard />
              </div>
              <h3>Family Care Bundle</h3>
              <p>
                Special pricing for families of 4+ members with priority
                scheduling.
              </p>
              <div className="offer-badge">Save 20%</div>
              <a href="/services" className="offer-button">
                View Details
              </a>
            </div>

            <div className="offer-card">
              <div className="offer-icon">
                <FaCalendarCheck />
              </div>
              <h3>Chronic Care Program</h3>
              <p>
                Ongoing support for diabetes, hypertension, and other chronic
                conditions.
              </p>
              <div className="offer-badge">Medical Aid Covered</div>
              <a href="/services" className="offer-button">
                Enroll Now
              </a>
            </div>
          </div>

          <div className="offers-footer">
            <p>
              All special offers valid through the end of the month. Insurance
              may cover some services.
            </p>
            <a href="/services" className="view-all-button">
              View All Offers <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="offers-header">
            <h2>Medical Aids Accepted</h2>
          </div>

          <div className="offers-grid">
            <div className="offer-card"  style={{backgroundColor:"#36B37E"}}>
              <div className="offer-icon">
              <BiSolidJoystickAlt />
              </div>
              <li style={{color:"#fff"}}>CELLMED</li>
              <li style={{color:"#fff"}}>CIMAS</li>
              <li style={{color:"#fff"}}>FIRST MUTUAL</li>
              <li style={{color:"#fff"}}>CIGNA</li>
            </div>

            <div className="offer-card"  style={{backgroundColor:"#36B37E"}}>
              <div className="offer-icon">
              <BiSolidJoystickAlt />
              </div>
              <li style={{color:"#fff"}}>MASCA</li>
              <li style={{color:"#fff"}}>BONVIE</li>
              <li style={{color:"#fff"}}>FLIMAS</li>
            </div>

            <div className="offer-card"  style={{backgroundColor:"#36B37E"}}>
              <div className="offer-icon">
              <BiSolidJoystickAlt />
              </div>
              <li style={{color:"#fff"}}>HEALTH INTERNATIONAL</li>
              {/* <li style={{color:"#fff"}}>BUPA</li> */}

              <li style={{color:"#fff"}}>GENERATIONS HEALTH</li>
            </div>

            <div className="offer-card" style={{backgroundColor:"#36B37E"}}>
              <div className="offer-icon">
              <BiSolidJoystickAlt />
              </div>
              <li style={{color:"#fff"}}>STEWARD HEALTH</li>
              <li style={{color:"#fff"}}>FBC HEALTH</li>
              <li style={{color:"#fff"}}>FIRST MUTUAL</li>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
}

export default Offer;
