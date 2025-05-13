import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner01 from "../../assets/med18.jpeg";
import banner02 from "../../assets/med16.jpeg";
import banner03 from "../../assets/med15.jpeg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "A Healthier Tomorrow Starts Here",
      description:
      "We provide high-quality medical services tailored to your needs. Your well-being is our mission—schedule a visit now",
      image: banner02,
    },
    {
      id: 2,
      title: "Expert Care Close to Home",
      description:  "From routine check-ups to specialized treatments, our dedicated team is here to support your health journey with compassion and expertise",
      image: banner01,
    },
    {
      id: 3,
      title: "Comprehensive Care for Every Patient",
      description:  "We provide high-quality medical services tailored to your needs. Your well-being is our mission—schedule a visit now",
      image: banner03,
    },
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[full]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
      
              }}
            >
              <div id="hero-box-container">
                <div id="hero-banner">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button   onClick={() => {
                  navigate("/contact");
                }}>Schedule an appointment</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
