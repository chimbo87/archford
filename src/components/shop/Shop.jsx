import React from "react";
import "./Shop.css";
import icon from '../../assets/images/med02.png';
import icon05 from '../../assets/images/pic02.jpg';
import icon02 from '../../assets/images/med21.jpg';
import icon03 from '../../assets/images/med22.jpg';
import icon06 from '../../assets/images/pic01.jpg';
import icon04 from '../../assets/images/pic03.jpg';
import { useNavigate } from "react-router-dom";
import { 
  FaHeartPulse, 
  FaBrain, 
  FaChildren, 
  FaBone, 
  FaArrowRight 
} from "react-icons/fa6";
import { LiaXRaySolid } from "react-icons/lia";

function Shop() {
  const navigate = useNavigate();

  return (
    <section className="key-services">
      <div className="container">
        <h2 className="section-title">Our Specialized Services</h2>
        <p className="section-subtitle">
          Comprehensive care for you and your family
        </p>

        <div className="services-grid">
          <div className="service-card">

            <div className="service-card-img">
              <img src={icon02} alt="cardiology"/>
            </div>
            <h3>Cardiology</h3>
            <p>
              Specialized heart care with advanced diagnostic and treatment
              options.
            </p>
            <a href="/services" className="service-link">
              Learn More
            </a>
          </div>

          <div className="service-card">
          <div className="service-card-img">
              <img src={icon05} alt="cardiology"/>
            </div>
            <h3>Neurology</h3>
            <p>
              Expert neurological care for disorders affecting the brain and
              nervous system.
            </p>
            <a href="/services" className="service-link">
              Learn More
            </a>
          </div>

          <div className="service-card">
          <div className="service-card-img">
              <img src={icon03} alt="cardiology"/>
            </div>
            <h3>Pediatrics</h3>
            <p>
              Compassionate healthcare for children from newborns to
              adolescents.
            </p>
            <a href="/services" className="service-link">
              Learn More
            </a>
          </div>

          <div className="service-card">
          <div className="service-card-img">
              <img src={icon06} alt="cardiology"/>
            </div>
            <h3>Orthopedics</h3>
            <p>
              Specialized care for bones, joints, ligaments, tendons, and
              muscles.
            </p>
            <a href="/services" className="service-link">
              Learn More
            </a>
          </div>

          <div className="service-card">
          <div className="service-card-img">
              <img src={icon04} alt="cardiology"/>
            </div>
            <h3>Radiology</h3>
            <p>
              Specialized imaging including X-ray, CT,Ultrasound, MRI & PAN
            </p>
            <a href="/services" className="service-link">
              Learn More
            </a>
          </div>
        </div>

        <div className="services-cta">
          <a href="/services" className="btn-primary">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Shop;