import React from "react";
import "./App.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Aboutus = () => {
  return (
    <div className="us">
      <Link to="/" className="back-link">
        <i className="bi bi-arrow-left"></i>
      </Link>

      <img src={logo} alt="Logo" className="logo" />
      <Sidebar />

      <div className="about-container">
        <h2>✨ About Us</h2>
        <p className="aboutus">
          Welcome to 
          <strong className="tittle">Mr. Cute Hair Cut Shop</strong>, where style meets comfort! <br /><br />
          We believe that a great haircut is more than just a look—it’s an experience. 
          Our skilled barbers and stylists provide modern, trendy, and classic haircuts tailored to your personality. 
          Whether it’s a quick trim, a sharp fade, or a stylish makeover, we make sure you walk out looking your best and feeling confident.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
