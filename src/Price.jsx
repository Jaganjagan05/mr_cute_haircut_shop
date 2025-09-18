import React, { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
const Price=()=>{
    return(
        <div className="price">
            <img src={logo} alt="Logo" className="logo" />
             <Link to="/" className="back-link">

              <i className="bi bi-arrow-left"></i>
            </Link>
            <Sidebar />
            <p>
            <strong>Haircuts</strong>

                Kids Cut-₹150

                Classic Men’s Cut-₹200

                Stylish Fade / Layer Cut-₹250

                Beard Trim & Shape -₹100

                Hair Wash & Style-₹100

                <strong>💇‍♂️ Special Services</strong>

                Hair Coloring – Starts from ₹500

                Hair Spa – ₹300

                Straightening / Smoothening – ₹700 onwards
            </p>

        </div>

    )
}
export default Price;