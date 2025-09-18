import React, { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const   Contact=()=>{
    return(
        <div className="hero">
             <Link to="/" className="back-link">
              <i className="bi bi-arrow-left"></i>
            </Link>
            <Sidebar />
            <p>Contact Us

📍 Address: [Your Shop Address Here]
📞 Phone: +91 [Your Number]
📧 Email: [Your Email]
⏰ Timings: 9:00 AM – 9:00 PM (Open All Days)</p>
      </div>
    )
}
export default Contact;