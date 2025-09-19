import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

// Make sure these files exist with exact names: Sidebar.js, Image.js
import Sidebar from "./Sidebar";
import logo from "./img/logo.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* Sidebar and Image */}
      <img src={logo} alt="Logo" className="logo" />
      <Sidebar />

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="moving-text"></h1>
        <p className="moving-text tagline">
          Style That Speaks, Cuts That Shine ✂️✨
        </p>
        <Link to="/form" className="book-btn">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default Hero;