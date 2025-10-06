import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div
      className={`hamburger-menu ${menuActive ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>


      <ul className="menu-list">


        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/price">Price List</Link></li>
        <li><Link to="/form">Book Appointment</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

