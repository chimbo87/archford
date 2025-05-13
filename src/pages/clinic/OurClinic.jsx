import React from "react";
// import { VirtualTour } from "../../components/clinic/VirtualTour";
import "./OurClinic.css";
import { FacilityInfo } from "../../components/clinic/FacilityInfo";
import { TechnologyHighlights } from "../../components/clinic/TechnologyHighlights";
import { AccessibilityInfo } from "../../components/clinic/AccessibilityInfo";
// import { ParkingTransport } from "../../components/clinic/ParkingTransport";
// import { Amenities } from "../../components/clinic/Amenities";
import { MapsDirections } from "../../components/clinic/MapsDirections";
import { PhotoGallery } from "../../components/clinic/PhotoGallery";

function OurClinic() {
  return (
    <div id="theClinicBox">
      <div id="theClinicBoxWrap">
        {/* <VirtualTour /> */}
        <FacilityInfo />
        <TechnologyHighlights /> 
        <AccessibilityInfo /> 
        {/* <ParkingTransport />  */}
        {/* <Amenities />  */}
        <MapsDirections />
        <PhotoGallery /> 
      </div>
    </div>
  );
}

export default OurClinic;
