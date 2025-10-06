import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import Sidebar from "./sidebar";

const Hero = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <div className="hero">
      {/* Hamburger Menu */}
      
      <Sidebar menuActive={menuActive} toggleMenu={toggleMenu} />
      {/* Hero Content with moving animation */}
      <div className="hero-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="moving-text">𝔧𝔞𝔤𝔞𝔫</h1>
        <p className="moving-text tagline">
          Style That Speaks, Cuts That Shine ✂️✨
        </p>
        <Link to="/form" className="book-btn">Book Appointment</Link>
      </div>
    </div>
  );
};

export default Hero;
