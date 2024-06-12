import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./navbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setNav(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (to) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleLinkClick();
  };

  return (
    <div name="top">
      <div className="navbar">
        <div className="logo" onClick={scrollToTop}>
          <h1 className="textlogo">
            InfoViolência
          </h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <RouterLink className="l1"
              to="/"
              onClick={() => handleNavClick("home")}
            >
              introdução
            </RouterLink>
          </li>
          <li>
            <RouterLink className="l2"
              to="/"
              onClick={() => handleNavClick("home2")}
            >
              Dashboards
            </RouterLink>
          </li>
          <li>
            <RouterLink className="l3"
              to="/"
              onClick={() => handleNavClick("home3")}
            >
              Procure ajuda
            </RouterLink>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
