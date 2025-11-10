import './Achievements.css'
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Bannari_Amman  from '../Assets/Achievements/Bannari Amman Institute of Technology.jpg';
import CIT_PC  from '../Assets/Achievements/CIT_PC.jpeg';
import Kongu from '../Assets/Achievements/Kongu.jpg';
import Sona from '../Assets/Achievements/Sona.jpeg';
import VIT from '../Assets/Achievements/VIT.jpeg';
import MPTI from '../Assets/Achievements/MPTI.jpeg';
import Kong_2 from '../Assets/Achievements/Kong_2.jpeg';
import YUKTI from '../Assets/Achievements/YUKTI.png';
import Workshop_SKCET from '../Assets/Photos/Workshop_SKCET.jpg';

const achievements = [
  {
    id: 1,
    img: Bannari_Amman ,
    title: "Product Expo- Winner(Bannari Amman Institute of Technology-(2025)",
  },
  {
    id: 2,
    img: CIT_PC ,
    title: "I 𝐬𝐞𝐜𝐮𝐫𝐞𝐝 𝐭𝐡𝐞 𝐑𝐮𝐧𝐧𝐞𝐫-𝐔𝐩 𝐩𝐨𝐬𝐢𝐭𝐢𝐨𝐧 𝐢𝐧 𝐭𝐡𝐞 𝐏𝐂 𝐁𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐞𝐯𝐞𝐧𝐭 𝐚𝐭 𝐭𝐡𝐞 CIT - 𝐂𝐑𝐘𝐏𝐓𝐄𝐑𝐀 𝟐𝟎𝟐𝟓",
  },
  {
    id: 3,
    img: Kongu ,
    title: " I won 1st Prize in two events at Kongu Engineering(2025)",
  },
  {
    id: 4,
    img:Sona,
    title: "I secured 𝟐𝐧𝐝 𝐩𝐥𝐚𝐜𝐞 𝐢𝐧 𝐭𝐡𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐒𝐩𝐨𝐭𝐥𝐢𝐠𝐡𝐭 at Sona College(2025)",
  },
  {
    id: 5,
    img:VIT,
    title: "𝐒𝐞𝐜𝐮𝐫𝐞𝐝 𝟐𝐧𝐝 𝐏𝐥𝐚𝐜𝐞 𝐚𝐭 𝐓𝐄𝐂𝐄𝐓𝐑𝐎𝐍-𝟐𝟓 at VIT(2025)",
  },
  {
    id: 6,
    img:MPTI,
    title: "I will be coordinating and delivering a hands-on Workshop on “𝐄𝐦𝐛𝐞𝐝𝐝𝐞𝐝 𝐒𝐲𝐬𝐭𝐞𝐦𝐬 𝐚𝐧𝐝 𝐈𝐨𝐓” at MPTI",
  },
   {
    id: 7,
    img:Kong_2,
    title: "2nd Prize in the “Creation Unleashed” project presentation event at Kongu Engineering(2025)",
  }, {
    id: 8,
    img:YUKTI,
    title: "Shortlisted for the Yukti Innovation Challenge 2025 for the project “Zone-Level Real-Time Accident Detection and Emergency Response System.”",
  },
  {
    id: 9,
    img:Workshop_SKCET,
    title: "As the IoT Club Coordinator at Sri Krishna College of Engineering and Technology, responsible for coordinating and delivering hands-on workshops on Embedded Systems and IoT, having successfully conducted 10+ workshops.",
  },
];

const Achievements=()=>{
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
    <div>
        <h2>Achivements</h2>
    <div className="carousel">
      {achievements.map((item, index) => (
        <div
          key={item.id}
          className={`card ${getClass(index)}`}
          onMouseEnter={() => setPaused(true)} 
          onMouseLeave={() => setPaused(false)} 
        >
          <img src={item.img} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
  <div>
  <h2 className="More">
    <Link 
      to="/Gallery" 
      style={{ textDecoration: "none", color: "darkorange", cursor: "pointer" }}
    >
      More..
    </Link>
  </h2>
</div>


    </div></div>
  );
}

export default Achievements;