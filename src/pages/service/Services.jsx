import React from "react";
import "./Services.css";
import ListOfServices from "../../components/listofservices/ListOfServices";
import ServiceCategory from "../../components/servicecategory/ServiceCategory";
import EquipmentTechnology from "../../components/equipment/EquipmentTechnology";
import ServiceFAQs from "../../components/askedquestions/ServiceFAQs";


function Services() {
  return (
    <div className="serviceBox">
      <ListOfServices />
      {/* <ServiceDescription/> */}
      <ServiceCategory/>
      {/* <TreatmentProcess/> */}
      <EquipmentTechnology/>
      <ServiceFAQs/>
      {/* <Certifications/> */}
    </div>
  );
}

export default Services;
