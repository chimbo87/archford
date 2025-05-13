// import { useState } from 'react';
// import './ServiceDescription.css'

// const ServiceDescription = () => {
//   const [expandedId, setExpandedId] = useState(null);

//   const services = [
//     {
//       id: 1,
//       title: "Primary Care",
//       shortDescription: "Comprehensive healthcare for patients of all ages.",
//       longDescription: "Our primary care services include preventive care, routine check-ups, management of acute and chronic illnesses, and coordination of care with specialists when needed. Our team provides personalized care that addresses your unique health needs.",
//       icon: "🏥"
//     },
//     {
//       id: 2,
//       title: "Pediatric Services",
//       shortDescription: "Specialized healthcare for infants, children, and adolescents.",
//       longDescription: "Our pediatric team provides comprehensive care for children from birth through adolescence. Services include well-child visits, vaccinations, developmental screenings, acute illness management, and guidance for parents on supporting healthy development.",
//       icon: "👶"
//     },
//     {
//       id: 3,
//       title: "Women's Health",
//       shortDescription: "Specialized care addressing women's unique health needs.",
//       longDescription: "Our women's health services cover preventive screenings, reproductive health, prenatal and postnatal care, menopause management, and comprehensive gynecological services. We provide compassionate care tailored to every stage of a woman's life.",
//       icon: "👩"
//     },
//     {
//       id: 4,
//       title: "Diagnostic Services",
//       shortDescription: "Advanced testing for accurate diagnosis and treatment.",
//       longDescription: "Our clinic offers comprehensive diagnostic services including laboratory testing, imaging services, cardiac monitoring, and specialized diagnostic procedures. Our state-of-the-art equipment ensures accurate results for informed treatment decisions.",
//       icon: "🔬"
//     },
//     {
//       id: 5,
//       title: "Chronic Disease Management",
//       shortDescription: "Ongoing care for long-term health conditions.",
//       longDescription: "We provide expert management of chronic conditions such as diabetes, hypertension, asthma, COPD, and arthritis. Our approach includes personalized treatment plans, regular monitoring, lifestyle counseling, and education to help you effectively manage your condition.",
//       icon: "❤️"
//     }
//   ];

//   const toggleExpand = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <div className="service-description-container bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      
//       <div className="service-cards space-y-4">
//         {services.map(service => (
//           <div 
//             key={service.id} 
//             className="service-card bg-neutral-50 rounded-lg overflow-hidden border border-gray-100"
//           >
//             <div 
//               className="service-header flex items-center justify-between p-4 cursor-pointer"
//               onClick={() => toggleExpand(service.id)}
//             >
//               <div className="flex items-center">
//                 <span className="service-icon text-2xl mr-3">{service.icon}</span>
//                 <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
//               </div>
//               <div className="service-short-desc hidden md:block text-gray-600 flex-grow mx-4">
//                 {service.shortDescription}
//               </div>
//               <span className="text-green-500 text-2xl">
//                 {expandedId === service.id ? '−' : '+'}
//               </span>
//             </div>
            
//             {/* Mobile short description */}
//             <div className="md:hidden px-4 pb-2 text-gray-600">
//               {service.shortDescription}
//             </div>
            
//             {expandedId === service.id && (
//               <div className="service-details p-4 pt-0 bg-blue-50 border-t border-blue-100">
//                 <p className="text-gray-700">{service.longDescription}</p>
//                 <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
//                   Learn More
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceDescription;