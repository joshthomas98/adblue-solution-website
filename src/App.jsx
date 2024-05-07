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
import ReviewForm from "./pages/ReviewForm";
import ReviewsList from "./pages/ReviewsList";
import ReviewSubmitted from "./pages/ReviewSubmitted";
import FaqAccordion from "./pages/Faqs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BasicSpinner from "./components/Spinner";
import Disclaimer from "./pages/Disclaimer";

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

          <Route path="/reviewform" element={<ReviewForm />} />

          <Route path="/reviewslist" element={<ReviewsList />} />

          <Route
            path="/reviewsubmittedsuccessfully"
            element={<ReviewSubmitted />}
          />

          <Route path="/faqs" element={<FaqAccordion />} />

          <Route path="/termsandconditions" element={<TermsAndConditions />} />

          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/spinner" element={<BasicSpinner />} />

          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </ServicesProvider>
    </Router>
  );
};

export default App;
