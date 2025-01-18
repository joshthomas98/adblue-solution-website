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
    fontSize: "1.4rem",
    whiteSpace: "nowrap",
  };

  const whatsappContainerStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "9999",
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    backgroundColor: "#25d366",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="px-5">
      <div className="pb-2">
        <div style={whatsappContainerStyle}>
          <img
            src="/assets/whatsapp-white-icon.png"
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
          className="d-flex justify-content-center align-items-center lead pt-2 pb-4"
          style={{ marginBottom: "-9px" }}
        >
          <div className="d-lg-none ml-lg-3">
            <a
              href="mailto:info@allbluesolution.co.uk"
              style={{ color: "black", textDecoration: "none" }}
            >
              <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
              <span className="px-2" style={{ marginRight: "10px" }}>
                info@allbluesolution.co.uk
              </span>
              <br />
            </a>
            <div className="text-center">
              <a
                href="tel:07944162191"
                style={{ color: "black", textDecoration: "none" }}
              >
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                <span className="px-2">07944162191</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-end align-items-center lead"
          style={{ marginBottom: "-9px" }}
        >
          <div className="d-none d-lg-block ml-lg-3">
            <a
              href="mailto:info@allbluesolution.co.uk"
              style={{
                color: "black",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
              <span className="px-2" style={{ marginRight: "10px" }}>
                info@allbluesolution.co.uk
              </span>
            </a>
            <a
              href="tel:07944162191"
              style={{
                color: "black",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon className="mr-2" icon={faPhone} />
              <span className="px-2">07944162191</span>
            </a>
          </div>
        </div>
      </div>

      <Navbar
        className="pt-3 pb-0 pb-sm-1 pb-lg-0 pt-lg-0 pb-lg-2 pt-xl-1"
        collapseOnSelect
        expand="lg"
        style={{ marginTop: "-4px" }}
      >
        {/* Navbar Brand */}
        <Navbar.Brand
          href="/"
          className="text-center mx-auto d-block d-sm-none pb-5"
        >
          <img
            src="/assets/LOGO WHITE NO BG 2.png"
            alt="LOGO"
            style={{ width: "80%", marginTop: "-25px" }}
          />
        </Navbar.Brand>
        <Navbar.Brand href="/" className="d-none d-sm-block pb-4">
          <img
            src="/assets/LOGO WHITE NO BG 2.png"
            alt="LOGO"
            style={{ width: "100%", marginTop: "-25px" }}
          />
        </Navbar.Brand>

        {/* Centered July Offer Image */}
        <div className="d-flex justify-content-center align-items-center w-100 mb-3 pt-sm-5 pt-lg-0">
          <div
            style={{
              width: "60%",
              marginTop: "-50px",
              marginBottom: "-10px",
              marginLeft: "50px",
            }}
          >
            <img
              src="/assets/£200 Adblue Deletes.png"
              alt="SALE"
              className="w-75"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Navbar Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            marginLeft: "auto",
            marginTop: "-50px",
            marginBottom: "10px",
          }}
        />
        {/* Navbar Collapse */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto pb-5">
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
