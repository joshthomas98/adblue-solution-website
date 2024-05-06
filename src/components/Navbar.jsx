import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    navigate("/services");
  };

  const goToWhatsapp = () => {
    window.open("https://wa.me/+447944162191", "_blank");
  };

  const linkStyle = {
    fontFamily: "'Red Hat Display', sans-serif",
    fontSize: "1.3rem",
    whiteSpace: "nowrap", // Added this line to prevent wrapping
  };

  const whatsappContainerStyle = {
    position: "fixed",
    bottom: "20px", // Adjust the bottom position as needed
    right: "20px", // Adjust the right position as needed
    zIndex: "9999", // Ensure it appears above other content
    width: "75px", // Adjust the size as needed
    height: "75px", // Adjust the size as needed
    borderRadius: "50%", // Make it circular
    backgroundColor: "#25d366", // WhatsApp green color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="px-5">
      <div className="pb-2">
        <div style={whatsappContainerStyle}>
          <img
            src="dist/assets/whatsapp-white-icon.png"
            alt="WhatsApp Icon"
            style={{
              width: "50px",
              height: "50px",
              marginBottom: "2px",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={goToWhatsapp}
          />
        </div>
        <div
          className="d-flex justify-content-end align-items-center lead pt-2"
          style={{ marginBottom: "-10px" }}
        >
          <div className="d-none d-lg-block ml-lg-3">
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            <span className="px-2" style={{ marginRight: "10px" }}>
              info@adbluesolution.co.uk
            </span>
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            <span className="px-2">07944162191</span>
          </div>
        </div>
      </div>

      <Navbar
        className="pt-sm-3 pt-lg-0"
        collapseOnSelect
        expand="lg"
        style={{ marginTop: "-4px" }}
      >
        <Navbar.Brand href="/">
          <img
            src="/assets/LOGO WHITE NO BG.png"
            alt="LOGO"
            className="w-25 mx-3 pb-lg-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            marginLeft: "auto",
            marginTop: "-40px",
            marginBottom: "10px",
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/services"
              style={linkStyle}
              onClick={handleServicesClick}
            >
              Services
            </Nav.Link>
            <Nav.Link href="/about" style={linkStyle}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" style={linkStyle}>
              Contact
            </Nav.Link>
            <Nav.Link href="/reviewslist" style={linkStyle}>
              Reviews
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr style={{ borderTop: "2px solid black", margin: 0 }} />
    </div>
  );
}

export default NavbarComponent;
