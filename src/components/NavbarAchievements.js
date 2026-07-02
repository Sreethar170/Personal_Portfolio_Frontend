import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavbarAchievements = () => {
  return (
    <>
      <div className="nav">
        <nav className="navbar">
          <ul className="nav-link">
            <li>
              <Link to="/" state={{ scrollTo: "" }}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/" state={{ scrollTo: "About" }}>
                About
              </Link>
            </li>

            <li>
              <Link to="/" state={{ scrollTo: "Project" }}>
                Project
              </Link>
            </li>

            <li>
              <Link to="/" state={{ scrollTo: "Experience" }}>
                Experience
              </Link>
            </li>

            <li className="Menu">
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/" state={{ scrollTo: "Contacts" }}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarAchievements;