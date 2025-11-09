import React from "react";

const Skills=()=>{
    const skills=[
        {
            title: "🌐 IoT & Embedded Intelligence",
            description:"Hardware Platforms: Arduino Nano, ESP32, NodeMCU, Raspberry Pi. Modules & Interfaces: nRF24L01, GPS, GSM,+ DHT11, Ultrasonic, IR, Bluetooth. Expertise: Real-time telemetry, bidirectional communication, microcontroller optimization, and resilient system synchronization.",
        },
        {
            title: "🧩 Full-Stack Web Engineering",
            description:"Designing and orchestrating complete web ecosystems — from resilient backend architectures to dynamic, high-performance frontends. Skilled in RESTful API design, authentication flow, database modeling, and optimized client–server communication. Proficient in MongoDB, Express.js, React.js, and Node.js, ensuring scalable, secure, and responsive application delivery. ",
        },
        {
            title: "🛠️ Hardware Troubleshooting & Diagnostic Engineering",
            description:"Skilled in fixing problems in embedded, communication, and PCB systems. Experienced in testing power, setting up sensors, checking components, and linking hardware with software. Use tools like multimeter and oscilloscope to ensure reliable performance.",
        },
        {
            title: "💻 Custom PC Architecture & Performance Engineering",
            description:"Building custom PCs focused on speed, stability, and performance. Each system is designed for efficient power use, cooling, and long-term reliability. Skilled in choosing components, BIOS setup, thermal control, and system testing. Focus on creating high-performance PCs for development, embedded work, and heavy computing.",
        },
        {
            title: "🔧 Technical Support & Systems Optimization",
            description:"Providing reliable technical support with quick problem-solving and system optimization. Experienced in network setup, software-hardware support, system tuning, and user guidance. Focus on solving issues efficiently while keeping systems stable and users satisfied.",
        },
        {
            title: "📡 Network Orchestration & Systems Integratio",
            description:"Crafting and maintaining interconnected device ecosystems that sustain reliability under real-time constraints. Competency Domains: IP architecture, subnet optimization, routing dynamics, and IoT topology mapping. Protocols: MQTT, HTTP, TCP/IP, SPI, I2C. Focus: Latency-aware communication, fault isolation, and adaptive throughput enhancement.",
        },
    ]
    return(
        <div>
             <h2 className="SkillsTitle">My Technical Arsenal</h2>
             <div className="Skill">
            {skills.map((exp, index)=>(
                <div className="Skills">
                     <ul className="SkillsDetials"><li><h3 className="SkillsHeading">{exp.title}</h3>
                    <p >{exp.description}</p></li></ul>
                </div>
            ))}</div>
        </div>
    )
}




export default Skills;