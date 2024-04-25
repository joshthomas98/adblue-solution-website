import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Divider } from "@chakra-ui/react";

function NavbarComponent() {
  const linkStyle = {
    fontFamily: "'Red Hat Display', sans-serif",
    fontSize: "1.3rem",
  };

  return (
    <div className="px-5 pb-3">
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
            <Nav.Link href="#home" style={linkStyle}>
              Home
            </Nav.Link>

            <NavDropdown
              title="Services"
              id="collapsible-nav-dropdown"
              style={linkStyle}
            >
              <NavDropdown.Item href="#action/3.1" style={linkStyle}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={linkStyle}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={linkStyle}>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={linkStyle}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

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
