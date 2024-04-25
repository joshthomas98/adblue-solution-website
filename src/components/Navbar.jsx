import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    navigate("/services");
  };

  const linkStyle = {
    fontFamily: "'Red Hat Display', sans-serif",
    fontSize: "1.3rem",
  };

  return (
    <div className="px-5">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            src="src/assets/LOGO WHITE NO BG.png"
            alt="LOGO"
            className="w-25 mt-2 mx-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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

            <Nav.Link href="#about" style={linkStyle}>
              About
            </Nav.Link>

            <Nav.Link href="#contact" style={linkStyle}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr style={{ borderTop: "2px solid black", margin: 0 }} />
    </div>
  );
}

export default NavbarComponent;
