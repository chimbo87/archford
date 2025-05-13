import React, { useState } from 'react';
import './ServiceFAQs.css';

const ServiceFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What should I bring to my first appointment?",
      answer: "Please bring your ID, medical aid card, a list of current medications, and any relevant medical records or test results. If you're being referred by another doctor, please bring your referral form."
    },
    {
      id: 2,
      question: "How long do typical appointments take?",
      answer: "Initial consultations usually take 45-60 minutes. Follow-up appointments typically last 20-30 minutes, depending on the complexity of your case and treatment needs."
    },
    {
      id: 3,
      question: "Do you accept Medical aid",
      answer: "Yes, we accept most major Medical plans. We recommend contacting your Medical aid provider prior to your visit to verify coverage. Our administrative staff can also help answer Medical aid related questions."
    },
    {
      id: 4,
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office during business hours, using our online booking system through our website, or using our email."
    },
    {
      id: 5,
      question: "What diagnostic services do you offer in-house?",
      answer: "Our clinic offers a comprehensive range of diagnostic services including blood work, X-rays, ultrasounds, ECGs, and various screening tests. More specialized diagnostics may require referral to partner facilities."
    },
   
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to the most common questions about our services</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={faq.id}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Contact us directly and we'll be happy to help</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;