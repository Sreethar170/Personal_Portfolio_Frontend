import "./Achievements.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Bannari_Amman from "../Assets/Achievements/Bannari Amman Institute of Technology.jpg";
import CIT_PC from "../Assets/Achievements/CIT_PC.jpeg";
import Kongu from "../Assets/Achievements/Kongu.jpg";
import Sona from "../Assets/Achievements/Sona.jpeg";
import VIT from "../Assets/Achievements/VIT.jpeg";
import MPTI from "../Assets/Achievements/MPTI.jpeg";
import Kong_2 from "../Assets/Achievements/Kong_2.jpeg";
import YUKTI from "../Assets/Achievements/YUKTI.png";
import Workshop_SKCET from "../Assets/Photos/Workshop_SKCET.jpg";

const achievements = [
  {
    id: 1,
    img: Bannari_Amman,
    title: "Product Expo – Winner (Bannari Amman Institute of Technology, 2025)",
  },
  {
    id: 2,
    img: CIT_PC,
    title:
      "Runner-up in PC Building Event at CIT – CRYPTERA 2025.",
  },
  {
    id: 3,
    img: Kongu,
    title: "Won 1st Prize in two events at Kongu Engineering College (2025).",
  },
  {
    id: 4,
    img: Sona,
    title:
      "2nd Place in Project Spotlight at Sona College of Technology (2025).",
  },
  {
    id: 5,
    img: VIT,
    title: "2nd Place at TECETRON-25, VIT University (2025).",
  },
  {
    id: 6,
    img: MPTI,
    title:
      "Delivered a hands-on Workshop on 'Embedded Systems and IoT' at MPTI (2025).",
  },
  {
    id: 7,
    img: Kong_2,
    title:
      "2nd Prize in 'Creation Unleashed' Project Presentation at Kongu Engineering (2025).",
  },
  {
    id: 8,
    img: YUKTI,
    title:
      "Shortlisted for Yukti Innovation Challenge 2025 for 'Zone-Level Real-Time Accident Detection and Emergency Response System.'",
  },
  {
    id: 9,
    img: Workshop_SKCET,
    title:
      "As IoT Club Coordinator at SKCET, conducted 10+ Embedded Systems and IoT workshops.",
  },
];

const Achievements = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const getClass = (index) => {
    if (index === current) return "active";
    if (index === (current - 1 + achievements.length) % achievements.length)
      return "prev";
    if (index === (current + 1) % achievements.length) return "next";
    return "";
  };

  return (
    <section className="Achievements">
      <h2 className="AchievementsTitle">Achievements</h2>

      <div className="carousel">
        {achievements.map((item, index) => (
          <div
            key={item.id}
            className={`card ${getClass(index)}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <img
              src={item.img}
              alt={item.title || "Achievement"}
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x250?text=Image+Unavailable";
              }}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="more-container">
        <h2 className="More">
          <Link
            to="/gallery"
            style={{
              textDecoration: "none",
              color: "darkorange",
              cursor: "pointer",
            }}
          >
            More..
          </Link>
        </h2>
      </div>
    </section>
  );
};

export default Achievements;
