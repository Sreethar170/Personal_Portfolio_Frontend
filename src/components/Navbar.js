import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Scroll to hash section
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Handle navigation clicks
  const handleNavClick = (hash) => {
    closeMenu();
    if (location.pathname === "/") {
      const section = document.querySelector(hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + hash);
    }
  };

  // Triple-click logo for secret page
  const handleLogoClick = () => {
  setClicks(prev => prev + 1);
  setTimeout(() => setClicks(0), 5000); // reset after 5 sec

  if (clicks + 1 === 3) {
    window.open("/secret", "_blank"); 
    const username = prompt("Enter Username:");
    const password = prompt("Enter secret password:");
    if (password === "a" && username=="a") { // replace with actual
      // Open secret page in new tab
    } else {
      alert("Incorrect password!");
    }
    setClicks(0);
  }
};

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="logo" onClick={handleLogoClick}>Sreethar</div>
        <ul className={`nav-link ${menuOpen ? "active" : ""}`}>
          <li className="Menu">
            <a onClick={closeMenu} href="/">Home</a>
          </li>
          <li className="Menu">
            <a onClick={() => handleNavClick("#About")}>About</a>
          </li>
          <li className="Menu">
            <a onClick={() => handleNavClick("#Project")}>Project</a>
          </li>
          <li className="Menu">
            <a onClick={() => handleNavClick("#Experience")}>Experience</a>
          </li>
          <li className="Menu">
            <a onClick={closeMenu} href="/gallery">Gallery</a>
          </li>
          <li className="Menu">
            <a onClick={() => handleNavClick("#Contacts")}>Contact</a>
          </li>
        </ul>

        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
