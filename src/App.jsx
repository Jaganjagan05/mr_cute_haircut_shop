import React from "react";
import Hero from "./Hero";
import AppointmentForm from "./AppointmentForm";
import Aboutus from "./Aboutus";
import Price from "./Price";
import Contact from "./Contact";
import "./App.css";

import AdminPanel from "./AdminPanel";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/mr_cute_haircut_shop">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/form" element={<AppointmentForm />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
