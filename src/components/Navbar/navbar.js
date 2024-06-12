import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./navbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => setNav(!nav);

  const handleNavClick = (to) => {
    const scrollToElement = () => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView();
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToElement); 
    } else {
      scrollToElement(); 
    }

    setNav(false); 
  };

  return (
    <div name="top">
      <div className="navbar">
        <div className="logo" onClick={() => window.scrollTo({ top: 0 })}>
          <h1 className="textlogo">InfoViolência</h1>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <RouterLink to="/" onClick={() => handleNavClick("home")}>
              introdução
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/" onClick={() => handleNavClick("home2")}>
              Dashboards
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/" onClick={() => handleNavClick("home3")}>
              Procure ajuda
            </RouterLink>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>
          {nav ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
