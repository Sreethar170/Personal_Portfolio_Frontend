import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";

import Profile from '../Assets/Profile/me-removebg-preview.png';
import './Home.css'
import Skills from '../pages/Skills'
import Experiance from '../pages/Experiance'
import Contact from '../pages/Contact'
import Achivements from './Achievements'
import Projects from "./Projects";
import ResumeButton from "./ResumeButton";

function Home(){
      const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
    return (
        <>
        <div></div>
        <div className="Intro">
        <div  className="Profile"> <img src={Profile} className="pic" ></img></div>
        <div className="Inter_2"><div class="brand-name">Sreethar N J</div>
        <div className="IntoDetials"> A multidisciplinary technologist merging Full-Stack Web Engineering, 
            IoT systems, Embedded Intelligence,
             and Technical Support into real-world, scalable solutions.</div>
        <div className="Resume">
            <ResumeButton />
        </div></div></div>
        <div id="About"></div>
        <div className="About">
            <h2 className="AboutTitle">About Me</h2>
            <p className="AboutDetials">
            👨‍💻 I’m <b className="AB">Sreethar N J</b>, a multifaceted technologist from the <b className="AB">Department of Electronics and Communication Engineering</b>, specializing in<b className="AB"> IoT convergence, Embedded intelligence, Full-Stack Web Development, network orchestration, PCB architecture, PC building, and enterprise-grade technical support</b> — unifying these domains into cohesive, intelligent, and high-efficiency ecosystems.<br />
🔬 Fueled by a drive to translate theoretical engineering into tangible innovation, I architect systems that synchronize hardware logic with software precision — delivering designs that are scalable, optimized, and production-ready. My methodology fuses analytical discipline with creative engineering, ensuring every project evolves into a robust, real-world solution.<br />
🚀 As the <b className="AB">IoT Club Coordinator and Hackathon Club Coordinator</b>, I mentor teams, cultivate innovation, and orchestrate large-scale collaborations. I’ve <b className="AB">organized 10+ internal workshops and 2 external programs</b>, enabling hundreds of students to gain direct exposure to real-time applications and industry practices.<br />
🏆 Honored as the <b className="AB">Best Outgoing & Excellent Student</b> of the Year – 2023 (Diploma) and a <b className="AB">winner of 20+ technical project events</b> across premier symposiums, I embody a results-driven mindset grounded in <b className="AB">precision, innovation, and leadership</b>. My pursuit lies in engineering advanced, real-world systems that transcend conventional boundaries — merging creativity, embedded technologies, and full-stack architectures into scalable, high-performance solutions.</p>
            </div>
            <div id="Skill"></div>
            <div>
            <Skills />
            </div>
           <div id="Project"></div>
            <div>
                <Projects />
            </div>
            <div id="Experience">
                <Experiance />
            </div>
            <div>
                <Achivements />
            </div>
            <div id="Contacts"></div>

            <div className="Contacts">
                <div className="ContactTitle">Get in Touch</div>
                <div className="CT">
                <Contact /></div>
            </div>
        </>
    );
}
export default Home;