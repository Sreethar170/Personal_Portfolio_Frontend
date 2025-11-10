import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../Assets/Profile/me-removebg-preview.png";
import "./Home.css";
import Skills from "../pages/Skills";
import Experiance from "../pages/Experiance";
import Contact from "../pages/Contact";
import Achivements from "./Achievements";
import Projects from "./Projects";
import ResumeButton from "./ResumeButton";

function Home() {
  const location = useLocation();

  // ✅ Smooth scroll handling for route-based navigation (Vercel friendly)
  useEffect(() => {
    const scrollTarget = location.state?.scrollTo || location.hash?.substring(1);
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="Intro">
        <div className="Profile">
          <img src={Profile} alt="Sreethar" className="pic" />
        </div>
        <div className="Inter_2">
          <h1 className="brand-name">Sreethar N J</h1>
          <p className="IntoDetials">
            A multidisciplinary technologist merging Full-Stack Web Engineering,
            IoT systems, Embedded Intelligence, and Technical Support into
            real-world, scalable solutions.
          </p>
          <div className="Resume">
            <ResumeButton />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="About">
        <h2 className="AboutTitle">About Me</h2>
        <p className="AboutDetials">
          👨‍💻 I’m <b className="AB">Sreethar N J</b>, a multifaceted technologist from the{" "}
          <b className="AB">Department of Electronics and Communication Engineering</b>,
          specializing in <b className="AB">
            IoT convergence, Embedded intelligence, Full-Stack Web Development,
            network orchestration, PCB architecture, PC building, and
            enterprise-grade technical support
          </b>
          — unifying these domains into cohesive, intelligent, and high-efficiency
          ecosystems.
          <br />
          🔬 Fueled by a drive to translate theoretical engineering into tangible
          innovation, I architect systems that synchronize hardware logic with
          software precision — delivering designs that are scalable, optimized,
          and production-ready.
          <br />
          🚀 As the <b className="AB">IoT Club Coordinator</b> and{" "}
          <b className="AB">Hackathon Club Coordinator</b>, I mentor teams,
          cultivate innovation, and orchestrate large-scale collaborations. I’ve{" "}
          <b className="AB">organized 10+ internal workshops and 2 external programs</b>,
          enabling hundreds of students to gain real-world exposure.
          <br />
          🏆 Honored as the <b className="AB">Best Outgoing & Excellent Student</b> of the
          Year – 2023 and <b className="AB">winner of 20+ technical project events</b> across
          premier symposiums, I embody a results-driven mindset grounded in{" "}
          <b className="AB">precision, innovation, and leadership</b>.
        </p>
      </section>

      {/* Skills */}
      <section id="Skill">
        <Skills />
      </section>

      {/* Projects */}
      <section id="Project">
        <Projects />
      </section>

      {/* Experience */}
      <section id="Experience">
        <Experiance />
      </section>

      {/* Achievements */}
      <section id="Achievements">
        <Achivements />
      </section>

      {/* Contact */}
      <section id="Contacts" className="Contacts">
        <h2 className="ContactTitle">Get in Touch</h2>
        <div className="CT">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default Home;
