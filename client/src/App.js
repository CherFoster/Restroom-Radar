import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Bathrooms from './components/Bathrooms';
import CreateBathroom from './components/CreateBathroom';
import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar';
import BathroomDetails from "./components/BathroomDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bathrooms" element={<Bathrooms />} />
        <Route path="/add-bathroom" element={<CreateBathroom />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/bathrooms" element={<BathroomDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;