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
    whiteSpace: "nowrap", // Added this line to prevent wrapping
  };

  return (
    <div className="px-5">
      <Navbar collapseOnSelect expand="lg">
        {/* Add custom class for xs, sm, and md screen sizes */}
        <div className="pt-xs-sm-md-only">
          <Navbar.Brand href="/">
            <img
              src="/assets/LOGO WHITE NO BG.png"
              alt="LOGO"
              className="w-25 mx-3 pb-lg-2"
            />
          </Navbar.Brand>
        </div>
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
