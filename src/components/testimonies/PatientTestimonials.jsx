import { useState, useEffect } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './PatientTestimonials.css';

const PatientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Jennifer M",
      quote: "Mitral Clinic has been a true blessing for my family. Dr. Maforo and the team are always attentive, professional, and genuinely care about our well-being. We've never felt rushed, and every visit leaves us reassured and well-informed.",
      rating: 5,
    },
    {
      id: 2,
      name: "Paida K",
      quote: "As a mother, I'm so grateful for the care my children receive at Mitral Clinic. Dr. Ndlovu is amazing with kids—always kind and patient. The clinic is clean, well-run, and the service is top-notch",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily T",
      quote: "Bringing my children to Dr. Maforo has been a blessing. He's patient, kind, and makes them feel comfortable during appointments. The clinic's child-friendly environment makes visits stress-free.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Patients Say</h2>
        
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <Avatar size={64} icon={<UserOutlined />} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;