import React from "react";
import ContactInfo from "../../components/contacts/ContactInfo";
import LocationMap from "../../components/contacts/InteractiveMap";
import ContactForm from "../../components/contacts/ContactForm";
import "./Contact.css";
// import PhysicalAddress from "../../components/contacts/PhysicalAddress";
import OperatingHours from "../../components/contacts/OperatingHours";
// import EmergencyContact from "../../components/contacts/EmergencyContact";
function Contact() {
  return (
    <div id="contactBox">
      <div id="contactBoxWrap">
        <ContactInfo />
        <LocationMap />
        <ContactForm />
        {/* <PhysicalAddress /> */}
        <OperatingHours />
        {/* <EmergencyContact /> */}
      </div>
    </div>
  );
}

export default Contact;
