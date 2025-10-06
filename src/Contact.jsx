import React from "react";
import "./App.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="hero">
      <Link to="/" className="back-link">
        <i className="bi bi-arrow-left"></i>
      </Link>
      <Sidebar />

      <div className="contact-container">
        <h2>📞 Contact Us</h2>

        <p><i className="bi bi-geo-alt"></i> <span className="highlight">Address:</span> Your Shop Address Here</p>
        <p><i className="bi bi-telephone"></i> <span className="highlight">Phone:</span> +91 9876543210</p>
        <p><i className="bi bi-envelope"></i> <span className="highlight">Email:</span> your@email.com</p>
        <p><i className="bi bi-clock"></i> <span className="highlight">Timings:</span> 9:00 AM – 9:00 PM (All Days)</p>
      </div>
    </div>
  );
};

export default Contact;
