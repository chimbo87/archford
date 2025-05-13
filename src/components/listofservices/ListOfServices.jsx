import { useState } from "react";
import "./ListOfServices.css";
import banner01 from "../../assets/images/gallery01.jpg";
import banner02 from "../../assets/images/gallery02.jpg";
import banner03 from "../../assets/images/gallery03.jpg";
import banner04 from "../../assets/images/gallery04.jpg";
import banner05 from "../../assets/images/gallery05.jpg";
import banner06 from "../../assets/images/pic03.jpg";
import banner07 from "../../assets/images/med05.png";
import banner08 from "../../assets/images/med17.png";
import banner09 from "../../assets/images/med18.png";

const ListOfServices = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Array of all banner images
  const bannerImages = [banner01, banner03, banner02, banner06, banner05, banner04,banner07,banner09,banner08];

  const services = [
    {
      id: 1,
      name: "Annual Physical Examinations",
      category: "preventive",
      description:
        "Comprehensive yearly check-ups to assess your overall health status.",
      icon: "🩺",
    },
    {
      id: 2,
      name: "Vaccinations",
      category: "preventive",
      description:
        "Full range of immunizations for all age groups following CDC guidelines.",
      icon: "💉",
    },
    {
      id: 3,
      name: "Laboratory Testing",
      category: "diagnostic",
      description:
        "Complete blood work, urinalysis, and other tests for accurate diagnoses.",
      icon: "🧪",
    },
    {
      id: 4,
      name: "Radiology",
      category: "diagnostic",
      description:
        "Specialized imaging including X-ray, CT,Ultrasound, MRI & PAN",
      icon: "📷",
    },
    {
      id: 5,
      name: "Chronic Disease Management",
      category: "treatment",
      description:
        "Ongoing care for diabetes, hypertension, asthma, and other chronic conditions.",
      icon: "❤️",
    },
    {
      id: 6,
      name: "Minor Surgical Procedures",
      category: "treatment",
      description:
        "In-office procedures including suturing, mole removal, and abscess drainage.",
      icon: "✂️",
    },
    {
      id: 7,
      name: "Pediatric Care",
      category: "specialty",
      description:
        "Specialized healthcare for infants, children, and adolescents.",
      icon: "👶",
    },
    {
      id: 8,
      name: "Geriatric Medicine",
      category: "specialty",
      description:
        "Focused care for older adults addressing age-related health concerns.",
      icon: "👴",
    },
    {
      id: 9,
      name: "Medical Imaging",
      category: "specialty",
      description: "Specialized imaging including X-ray, CT,Ultrasound, MRI & PAN",
      icon: "📷",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  // Function to get a different image for each card
  const getServiceImage = (id) => {
    // Use modulo to cycle through the images if there are more services than images
    return bannerImages[(id - 1) % bannerImages.length];
  };

  return (
    <div className="services-list-container bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Our Medical Services
      </h2>

      {/* Services Grid */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="service-card p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 bg-neutral-50 flex flex-col"
          >
            <div className="service-image h-48 overflow-hidden rounded-md mb-4">
              <img 
                src={getServiceImage(service.id)} 
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              {service.name}
            </h3>
            <p className="text-gray-600 flex-grow">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfServices;