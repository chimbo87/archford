
import { useState } from 'react';
import './ServiceCategory.css'

const ServiceCategory = () => {
    const categories = [
      {
        id: 1,
        title: "Preventive Care",
        description: "Services focused on maintaining health and preventing disease.",
        icon: "🛡️",
        services: ["Annual check-ups", "Vaccinations", "Health screenings", "Wellness counseling"]
      },
      {
        id: 2,
        title: "Diagnostic Services",
        description: "Advanced testing for accurate diagnosis and treatment planning.",
        icon: "🔍",
        services: ["Laboratory testing", "Medical imaging", "Cardiac diagnostics", "Allergy testing"]
      },
      {
        id: 3,
        title: "Specialty Care",
        description: "Specialized medical services for specific conditions and populations.",
        icon: "⭐",
        services: ["Cardiology", "Dermatology", "Orthopedics", "Neurology"]
      },
      {
        id: 4,
        title: "Therapeutic Services",
        description: "Treatments to address specific health conditions.",
        icon: "💊",
        services: ["Physical therapy", "Minor procedures", "Chronic disease management", "Pain management"]
      },
      {
        id: 5,
        title: "Mental Health",
        description: "Services supporting psychological well-being and mental health.",
        icon: "🧠",
        services: ["Counseling", "Depression screening", "Anxiety management", "Mental health referrals"]
      },
      {
        id: 6,
        title: "Family Medicine",
        description: "Comprehensive care for patients of all ages and life stages.",
        icon: "👪",
        services: ["Pediatric care", "Adolescent medicine", "Adult medicine", "Geriatric care"]
      }
    ];
  
    return (
      <div className="service-categories-container bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Service Categories</h2>
        
        <div className="categories-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <div key={category.id} className="category-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="category-header bg-blue-700 p-4 flex items-center">
                <span className="category-icon text-3xl mr-3 bg-white p-2 rounded-full">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="category-content p-4 bg-neutral-50 h-full">
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="services-list">
                  <h4 className="text-sm uppercase font-semibold text-blue-800 mb-2">Services Include:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {category.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                
                {/* <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
                  View All Services
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServiceCategory;