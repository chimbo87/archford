import React from 'react';
import './About.css'

import MissionVision from '../../components/missionvision/MissionVision';
import CoreValues from '../../components/corevalues/CoreValues';
// import FacilityHighlights from '../../components/facilityhighlights/FacilityHighlights';
// import LeadershipTeam from '../../components/leadershipteam/LeadershipTeam';
import FacilityPhotos from '../../components/facilityphotos/FacilityPhotos';

function About() {
  return (
    <div className='theAboutBox'>
      {/* <ClinicHistory/> */}
      <MissionVision/>
      <CoreValues/>
      {/* <FacilityHighlights/> */}
      {/* <LeadershipTeam/> */}
      <FacilityPhotos/>
    </div>
  )
}

export default About
