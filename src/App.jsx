import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ServicesProvider } from "./context/ServicesContext";
import NavbarComponent from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Contact from "./pages/Contact";
import MessageSent from "./pages/MessageSent";
import About from "./pages/About";
import IndividualService from "./pages/IndividualService";

const App = () => {
  return (
    <Router>
      <ServicesProvider>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/services" element={<Services />} />

          <Route path="/socialmediaicons" element={<SocialMediaIcons />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/messagesent" element={<MessageSent />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/individual-service/:id"
            element={<IndividualService />}
          />
        </Routes>
        <Footer />
      </ServicesProvider>
    </Router>
  );
};

export default App;
