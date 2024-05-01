import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faCar, faCogs } from "@fortawesome/free-solid-svg-icons"; // Import relevant icons
import HomepageCards from "../components/HomepageCards";

const myfont = {
  fontFamily: "'Red Hat Display', sans-serif",
  fontSize: "1.3rem",
};

const Homepage = () => {
  return (
    <div style={myfont}>
      <section
        className="hero"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img
          src="/src/assets/banner-2.jpeg"
          alt=""
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div
          className="text-container"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            background: "none",
            maxWidth: "80%",
            zIndex: "1",
          }}
        >
          <h1
            style={{
              fontSize: "5vw",
              background: "none",
              "@media (max-width: 768px)": { fontSize: "4vw" },
              "@media (max-width: 576px)": { fontSize: "3vw" },
            }}
          >
            Welcome To AdBlue Solution
          </h1>
        </div>
      </section>

      <section className="home-about container py-5">
        <Row>
          <Col md={4} className="offset-md-1 text-center">
            {" "}
            {/* Added text-center class */}
            <img
              style={{ height: "400px", width: "auto" }}
              className="img-fluid"
              src="src/assets/van man white background no slogan.png"
              alt=""
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="container text-md-start text-center">
              {" "}
              {/* Added text-md-start and text-center classes */}
              <h2 className="pb-1">It's What We Do</h2>
              <p className="pb-1">
                UK specialists in Adblue delete services. Our experienced
                technicians, cutting-edge equipment, and thorough diagnostics
                software ensure prompt and reliable solutions to your Adblue
                issues, as well as a wide range of other vehicle-related
                services. Your safety and satisfaction are our top priorities.
                Explore our comprehensive list of services and get a free quote
                today.
              </p>
              <Button href="/about">Find out more about us</Button>
            </div>
          </Col>
        </Row>
      </section>

      <section
        className="homepage-cards py-5"
        style={{ backgroundColor: "#1D1D1C" }}
      >
        <HomepageCards />
      </section>

      <section className="pb-3" id="functionality boxes">
        <Container>
          <Row className="text-center g-4">
            <Col md>
              <div className="homepage-card bg-secondary">
                <div className="card-body text-center p-3">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon icon={faWrench} />
                  </div>
                  <h3 className="card-title mb-3">Experienced Technicians</h3>{" "}
                  {/* Updated title */}
                  <p className="card-text">
                    Our technicians have extensive experience in Adblue delete
                    services, ensuring high-quality and reliable solutions for
                    our customers.
                  </p>
                </div>
              </div>
            </Col>

            <Col md>
              <div className="homepage-card bg-secondary">
                <div className="card-body text-center p-3">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon icon={faCogs} /> {/* Changed icon */}
                  </div>
                  <h3 className="card-title mb-3">Full Vehicle Diagnostics</h3>{" "}
                  {/* Updated title */}
                  <p className="card-text">
                    We conduct thorough vehicle diagnostic scans to fully
                    understand the issue before proceeding, ensuring safety and
                    reliability for our customers.
                  </p>
                </div>
              </div>
            </Col>

            <Col md>
              <div className="homepage-card bg-secondary">
                <div className="card-body text-center p-3">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon icon={faCar} /> {/* Changed icon */}
                  </div>
                  <h3 className="card-title mb-3">Complete ECU Service</h3>{" "}
                  {/* Updated title */}
                  <p className="card-text">
                    Our services encompass a complete ECU service, meeting all
                    vehicle-related needs and ensuring our customers receive
                    comprehensive support.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
