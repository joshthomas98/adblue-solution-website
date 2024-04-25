import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import NavbarComponent from "./components/Navbar";
import Services from "./pages/Services";

// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
