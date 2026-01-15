import React from "react";
import "./Services.css";

const services = [
  {
    title: "Embedded System Design",
    description:
      "Microcontroller-based system design, firmware development, hardware interfacing, debugging, and real-time testing."
  },
  {
    title: "IoT Devices & Solutions",
    description:
      "End-to-end IoT solutions including sensor integration, wireless communication, cloud connectivity, and live data monitoring."
  },
  {
    title: "MERN Stack – Full Stack Development",
    description:
      "Full-stack web applications using MongoDB, Express.js, React, and Node.js with secure and scalable architecture."
  },
  {
    title: "Web Development",
    description:
      "Responsive and optimized websites using HTML, CSS, JavaScript, and modern frameworks."
  },
  {
    title: "WordPress Web Development",
    description:
      "Custom WordPress websites, theme customization, performance optimization, and deployment."
  },
  {
    title: "UI / UX Design",
    description:
      "User-focused UI/UX design with strong emphasis on usability and clean layouts."
  },
  {
    title: "PC Build & Remote Services",
    description:
      "Custom PC assembly, OS installation, upgrades, performance tuning, and remote troubleshooting."
  },
  {
    title: "Technical Support Engineer",
    description:
      "L1/L2 technical support, issue diagnosis, system maintenance, and end-user assistance."
  },
  {
    title: "Hardware Support Engineer",
    description:
      "Hardware installation, maintenance, fault detection, and component-level troubleshooting."
  },
  {
    title: "Documentation",
    description:
      "Technical and non-technical documentation including reports, manuals, and system documentation."
  },
  {
    title: "Meta Ads",
    description:
      "Meta (Facebook & Instagram) ad setup, optimization, and performance tracking."
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">🛠 Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
