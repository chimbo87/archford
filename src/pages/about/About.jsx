import React from 'react'
import PersonalStory from './personalstory/PersonalStory'
import SkillsMatrix from './skillsmatrix/SkillsMatrix'
import ExperienceTimeline from './experiencetimeline/ExperienceTimeline'
import PersonalInterests from './personalinterests/PersonalInterests'
import ProfileImage from './profileimage/ProfileImage'

function About() {
  return (
    <div>
         <ProfileImage/>
      <PersonalStory/>
      <SkillsMatrix/>
      <ExperienceTimeline/>
      <PersonalInterests/>
   
    </div>
  )
}

export default About
