import React from "react";
import "./App.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Price = () => {
  return (
    <div className="price">
      <img src={logo} alt="Logo" className="logo" />

      <Link to="/" className="back-link">
        <i className="bi bi-arrow-left"></i>
      </Link>

      <Sidebar />

      <div className="price-container">
        <h2>💇‍♂️ Haircuts & Services</h2>

        <ul>
          <li>✂️ Kids Cut <span>₹150</span></li>
          <li>💇 Classic Men’s Cut <span>₹200</span></li>
          <li>🔥 Stylish Fade / Layer Cut <span>₹250</span></li>
          <li>🧔 Beard Trim & Shape <span>₹100</span></li>
          <li>💦 Hair Wash & Style <span>₹100</span></li>
        </ul>

        <hr />

        <h3>✨ Special Services</h3>

        <ul>
          <li>🎨 Hair Coloring <span>₹500 onwards</span></li>
          <li>🌿 Hair Spa <span>₹300</span></li>
          <li>💎 Straightening / Smoothening <span>₹700 onwards</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Price;
