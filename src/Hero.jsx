import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./sidebar";
import logo from "./img/logo.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* Logo + Sidebar */}
      <img src={logo} alt="Logo" className="logo" />
      <Sidebar />

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Welcome to Mr. Cute Hair Cut Shop</h1>
        <p className="tagline">Style That Speaks, Cuts That Shine ✂️✨</p>
        <Link to="/form" className="book-btn">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default Hero;

