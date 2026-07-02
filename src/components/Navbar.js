import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleNavClick = (hash) => {
    closeMenu();

    if (location.pathname === "/") {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  const handleLogoClick = () => {
    setLogoClicks((prev) => {
      const newClicks = prev + 1;

      if (newClicks === 3) {
        const username = prompt("Username sollu da 👀");
        const password = prompt("Password um marakama podu 😏");

        if (
          (username === "Sree" && password === "Sree") ||
          (username === "love" && password === "you")
        ) {
          window.open("/secret", "_blank");
        } else {
          alert(
            "Dei! Username / Password thappu 🤦‍♂️\n" +
              "Correct ah potta dhan ulla viduven 😎"
          );
        }

        return 0;
      }

      setTimeout(() => setLogoClicks(0), 5000);
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
          <li className="Menu">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li className="Menu">
            <button onClick={() => handleNavClick("#About")}>
              About
            </button>
          </li>

          <li className="Menu">
            <button onClick={() => handleNavClick("#Project")}>
              Project
            </button>
          </li>

          <li className="Menu">
            <button onClick={() => handleNavClick("#Experience")}>
              Experience
            </button>
          </li>

          <li className="Menu">
            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>

          <li className="Menu">
            <button onClick={() => handleNavClick("#Services")}>
              Services
            </button>
          </li>

          <li className="Menu">
            <button onClick={() => handleNavClick("#Contacts")}>
              Contact
            </button>
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