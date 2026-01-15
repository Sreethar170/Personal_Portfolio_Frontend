import React from "react";
import './Experiance.css';

const Experiance =()=>{
    const experiance =[
        {
            title: "In-Plant Training – Indian Railways (Signal & Telecom Department)",
            date: "May 2025 - Jun 2025",
            description :"Trained in signal control systems, telecommunication networks, and safety automation processes within railway operations.",

        },{
            title: "Youth United Council of India (YUCI)",
            date: "Jan 2025 - Oct 2025",
            description :"Head of Department – ECE (Jan 2025 – Oct 2025, Coimbatore, Tamil Nadu) Led department-level initiatives, managed teams, and coordinated student engagement programs focused on innovation and leadership.",
            description_1:"Campus Technical Coordinator (Dec 2024 – Oct 2025, Remote – Chennai, Tamil Nadu) Organized and supported campus-wide technical events, promoting collaboration, event planning, and personal development initiatives.",

        },{
            title: "In-Plant Training – BSNL (Telecommunication)",
            date: "Jul 2025 - Jul 2025",
            description :"Gained practical knowledge in network configuration, signal transmission, and switching systems in a telecom environment.",

        },{
            title: "IoT Intern – Novi Tech R&D Pvt Ltd",
            date: "Jul 2024 - Jul 2024",
            description :"Worked on IoT-based systems, focusing on sensor integration, real-time data transfer, and embedded communication.",

        },{
            title: "Intern – Sunshiv Electronic Solution",
            date: "Jul 2022 - Aug 2022",
            description :"Learned PCB design fundamentals, circuit testing, and hardware assembly, ensuring accuracy and functionality.",

        },
    ]
     return (
    <div className="experience-section" id="experience">
      <h2 className="experience-title">🎓 Experience / Internships</h2>
      <div className="timeline">
        {experiance.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="year">{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;