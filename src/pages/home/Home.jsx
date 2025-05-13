import React from "react";
import Hero from "../../components/hero/Hero";
import Offer from "../../components/offer/Offer";
import Mission from "../../components/mission/Mission";
import Shop from "../../components/shop/Shop";
import PatientTestimonials from "../../components/testimonies/PatientTestimonials";
import ClinicHours from "../../components/emergencey/ClinicHours";

function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Mission />
      <Shop />
      <PatientTestimonials/>
      <ClinicHours/>
    </>
  );
}

export default Home;
