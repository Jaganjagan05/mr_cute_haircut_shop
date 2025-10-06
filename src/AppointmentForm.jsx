import React, { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // ✅ success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit appointment");
      }

      const result = await res.json();
      console.log("✅ Appointment saved:", result);

      setMessage({ type: "success", text: "Appointment Submitted Successfully!" });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
      });
    } catch (err) {
      console.error("❌ Error submitting appointment:", err);
      setMessage({ type: "error", text: "Error: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-section">
      <Link to="/" className="back-link">
        <i className="bi bi-arrow-left"></i>
      </Link>

      <Sidebar />
      <img src={logo} alt="Logo" className="logo" />
      <h2>Book an Appointment</h2>

      {message && (
        <p
          className={`message ${message.type === "success" ? "success-msg" : "error-msg"}`}
        >
          {message.text}
        </p>
      )}

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Beard Trim">Beard Trim</option>
          <option value="Hair Color">Hair Color</option>
          <option value="Full Grooming">Full Grooming</option>
        </select>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Appointment"}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
