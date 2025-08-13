import React from "react";
import Hero from "../../components/home/hero/Hero";
import FeaturedProjects from "../../components/home/featuredprojects/FeaturedProjects";
import ContactInfo from "../../components/home/contactinfo/ContactInfo";
import ContactPreview from "../../components/home/contactpreview/ContactPreview";
import BlogTeaser from "../../components/home/blogteaser/BlogTeaser";
import AboutPreview from "../../components/home/aboutpreview/AboutPreview";
import SkillsTechnologies from "../../components/home/skillstechnologies/SkillsTechnologies";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview/>
      <FeaturedProjects/>
      <SkillsTechnologies/>
      <ContactPreview/>
    </>
  );
}

export default Home;
