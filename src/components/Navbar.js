import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // ✅ Smooth scroll for hash links
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // ✅ Safe route navigation with scroll handling
  const handleNavClick = (hash) => {
    closeMenu();
    if (location.pathname === "/") {
      const section = document.querySelector(hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${hash}`);
    }
  };

  // ✅ Triple click secret page with prompt validation
  const handleLogoClick = () => {
    setClicks((prev) => {
      const newClicks = prev + 1;

      if (newClicks === 3) {
        const username = prompt("Enter Username:");
        const password = prompt("Enter secret password:");
        if (username === "a" && password === "a") {
          window.open("/secret", "_blank");
        } else {
          alert("Incorrect username or password!");
        }
        return 0; // reset after validation
      }

      // reset if user doesn’t complete within 5 sec
      setTimeout(() => setClicks(0), 5000);
      return newClicks;
    });
  };

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          Sreethar
        </div>

        <ul className={`nav-link ${menuOpen ? "active" : ""}`}>
          <li className="Menu"><a href="/" onClick={closeMenu}>Home</a></li>
          <li className="Menu"><a onClick={() => handleNavClick("#About")}>About</a></li>
          <li className="Menu"><a onClick={() => handleNavClick("#Project")}>Project</a></li>
          <li className="Menu"><a onClick={() => handleNavClick("#Experience")}>Experience</a></li>
          <li className="Menu"><a href="/gallery" onClick={closeMenu}>Gallery</a></li>
          <li className="Menu"><a onClick={() => handleNavClick("#Contacts")}>Contact</a></li>
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
