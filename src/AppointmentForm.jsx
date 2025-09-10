import React, { useState } from "react";
import "./App.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment Submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: ""
    });
  };

  return (
    <div className="appointment-section">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Beard Trim">Beard Trim</option>
          <option value="Hair Color">Hair Color</option>
          <option value="Full Grooming">Full Grooming</option>
        </select>
        <button type="submit" className="submit-btn">Submit Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
