// Testimonials.jsx
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with [Your Name] was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional.",
      author: "Jane Smith",
      role: "CEO at TechCorp",
    },
    {
      quote:
        "The project was delivered on time and exceeded our expectations. Highly recommended for any frontend development work.",
      author: "Michael Johnson",
      role: "Product Manager at DesignHub",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-quote">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-details">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="testimonials-button">View All Testimonials</button>
      </div>
    </section>
  );
};

export default Testimonials;