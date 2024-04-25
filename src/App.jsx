import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import NavbarComponent from "./components/Navbar";

// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
