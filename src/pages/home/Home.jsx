import React from "react";
import Hero from "../../components/home/hero/Hero";
import TechStack from "../../components/home/techstack/TechStack";
import ProjectsCarousel from "../../components/home/projectscarousel/ProjectsCarousel";
import ProfessionalSummary from "../../components/home/professionalsummary/ProfessionalSummary";
import ContactInfo from "../../components/home/contactinfo/ContactInfo";
import Testimonials from "../../components/home/testimonials/Testimonials";
import BlogTeaser from "../../components/home/blogteaser/BlogTeaser";

function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <ProjectsCarousel />
      <ProfessionalSummary />
      <Testimonials />
      <BlogTeaser />
      <ContactInfo />
    </>
  );
}

export default Home;
