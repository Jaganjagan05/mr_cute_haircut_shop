import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const nav=useNavigate();
  return (
    <div className="hero">
      {/* Hamburger Menu */}
      <div
        className={`hamburger-menu ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>

        <ul className="menu-list">
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/price">Price List</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Hero Content with moving animation */}
      <div className="hero-content">
        <h1 className="moving-text">Mr. Cute Hair Cut Shop</h1>
        <p className="moving-text tagline">Style That Speaks, Cuts That Shine ✂️✨</p>
        <a href="/form">Book Appointment</a>
      </div>
    </div>
  );
};

export default Hero;
