import React, { useState } from "react";

function Home() {
  return (
    <div>
      

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We provide stylish cuts, modern grooming, and a premium salon experience for everyone.</p>
      </section>

      <section id="prices" className="section">
        <h2>Price List</h2>
        <ul>
          <li>Haircut: $15</li>
          <li>Beard Trim: $10</li>
          <li>Hair Color: $30</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: info@cuteshop.com | Phone: +123-456-7890</p>
      </section>
    </div>
  );
}

export default Home