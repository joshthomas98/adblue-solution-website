import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import NavbarComponent from "./components/Navbar";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Contact from "./pages/Contact";

// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/services" element={<Services />} />

        <Route path="/socialmediaicons" element={<SocialMediaIcons />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
