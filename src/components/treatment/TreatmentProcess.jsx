import { useState } from "react";
import './TreatmentProcess.css'

const TreatmentProcess = () => {
  const [selectedProcess, setSelectedProcess] = useState(1);

  const treatmentProcesses = [
    {
      id: 1,
      title: "Annual Physical Examination",
      description: "A comprehensive yearly assessment of your overall health status.",
      steps: [
        {
          title: "Pre-Appointment",
          description: "Complete health history questionnaire and list current medications. Fast for 8-12 hours if lab work is scheduled.",
          icon: "📋"
        },
        {
          title: "Check-In",
          description: "Arrive 15 minutes early to complete paperwork. Bring insurance card and photo ID.",
          icon: "🏥"
        },
        {
          title: "Vital Signs",
          description: "Medical assistant records weight, height, blood pressure, pulse, and temperature.",
          icon: "❤️"
        },
        {
          title: "Medical History Review",
          description: "Doctor reviews your medical history, medications, and any health concerns.",
          icon: "📝"
        },
        {
          title: "Physical Examination",
          description: "Comprehensive examination of various body systems, including heart, lungs, abdomen, and reflexes.",
          icon: "🩺"
        },
        {
          title: "Lab Work",
          description: "Blood tests and other laboratory assessments as needed to evaluate health markers.",
          icon: "🧪"
        },
        {
          title: "Results & Discussion",
          description: "Review of findings, recommendations, and preventive health counseling.",
          icon: "💬"
        },
        {
          title: "Follow-Up Plan",
          description: "Development of health plan, referrals if needed, and scheduling of follow-up appointments.",
          icon: "📅"
        }
      ]
    },
    {
      id: 2,
      title: "Minor Surgical Procedures",
      description: "In-office procedures for skin and soft tissue conditions.",
      steps: [
        {
          title: "Consultation",
          description: "Initial assessment to determine if the procedure is appropriate and discuss expected outcomes.",
          icon: "🔍"
        },
        {
          title: "Pre-Procedure Prep",
          description: "Instructions on medications, fasting requirements, and what to expect during and after.",
          icon: "📋"
        },
        {
          title: "Procedure Day",
          description: "Arrive 30 minutes early. The area is cleaned and local anesthetic administered if needed.",
          icon: "🏥"
        },
        {
          title: "The Procedure",
          description: "The doctor performs the procedure using sterile technique. Most procedures take 15-45 minutes.",
          icon: "✂️"
        },
        {
          title: "Recovery",
          description: "Brief monitoring period to ensure no immediate complications.",
          icon: "🛌"
        },
        {
          title: "Post-Procedure Instructions",
          description: "Detailed care instructions for the surgical site and activity restrictions.",
          icon: "📝"
        },
        {
          title: "Follow-Up Visit",
          description: "Assessment of healing and removal of sutures if applicable.",
          icon: "🩹"
        }
      ]
    },
    {
      id: 3,
      title: "Chronic Disease Management",
      description: "Ongoing care for conditions like diabetes, hypertension, and asthma.",
      steps: [
        {
          title: "Initial Assessment",
          description: "Comprehensive evaluation including medical history, physical exam, and diagnostic testing.",
          icon: "🔍"
        },
        {
          title: "Treatment Plan Development",
          description: "Collaborative creation of personalized management plan with clear goals.",
          icon: "📑"
        },
        {
          title: "Medication Management",
          description: "Prescription of appropriate medications with detailed education on usage.",
          icon: "💊"
        },
        {
          title: "Lifestyle Modifications",
          description: "Guidance on diet, exercise, and other lifestyle changes to improve condition management.",
          icon: "🥗"
        },
        {
          title: "Regular Monitoring",
          description: "Scheduled follow-up visits to track progress and adjust treatment as needed.",
          icon: "📊"
        },
        {
          title: "Lab Testing",
          description: "Periodic testing to monitor disease markers and medication effectiveness.",
          icon: "🧪"
        },
        {
          title: "Specialist Coordination",
          description: "Referrals to specialists when needed with coordinated care approach.",
          icon: "👨‍⚕️"
        },
        {
          title: "Annual Review",
          description: "Comprehensive yearly review of overall management plan and long-term outcomes.",
          icon: "📅"
        }
      ]
    }
  ];

  return (
    <div className="treatment-process-container bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Treatment Processes</h2>
      
      <div className="process-selector mb-8 flex flex-wrap justify-center gap-3">
        {treatmentProcesses.map(process => (
          <button
            key={process.id}
            className={`process-button px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedProcess === process.id
                ? 'bg-blue-700 text-white'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
            onClick={() => setSelectedProcess(process.id)}
          >
            {process.title}
          </button>
        ))}
      </div>
      
      {treatmentProcesses
        .filter(process => process.id === selectedProcess)
        .map(process => (
          <div key={process.id} className="selected-process">
            <div className="process-intro bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">{process.title}</h3>
              <p className="text-gray-700">{process.description}</p>
            </div>
            
            <h4 className="text-xl font-semibold mb-4 text-blue-800">Treatment Steps</h4>
            
            <div className="steps-timeline">
              {process.steps.map((step, index) => (
                <div key={index} className="timeline-item flex mb-8">
                  <div className="timeline-marker w-12 flex-shrink-0">
                    <div className="step-number flex items-center justify-center bg-blue-600 text-white w-8 h-8 rounded-full font-bold">
                      {index + 1}
                    </div>
                    {index < process.steps.length - 1 && (
                      <div className="step-line h-full w-px bg-blue-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  
                  <div className="timeline-content bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-grow ml-4">
                    <div className="flex items-center mb-2">
                      <span className="step-icon text-2xl mr-3">{step.icon}</span>
                      <h5 className="text-lg font-semibold text-blue-800">{step.title}</h5>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cta-section mt-6 p-6 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold mb-2 text-green-800">Have Questions About Your Treatment?</h4>
              <p className="mb-4 text-green-700">Our medical team is available to answer any questions about your care.</p>
              <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
                Contact Our Medical Team
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TreatmentProcess;