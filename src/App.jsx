import React from "react";
import Hero from "./Hero";
import AppointmentForm from "./AppointmentForm";
import Aboutus from "./Aboutus";
import Price from "./Price";
import Contact from "./Contact";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />}  ></Route>
      <Route path="/form" element={<AppointmentForm />}  ></Route>
      <Route path="/aboutus" element={<Aboutus/>}> </Route>
      <Route path="/price" element={<Price/>}> </Route>
      <Route path="/contact" element={<Contact/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
