import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faCar, faCogs } from "@fortawesome/free-solid-svg-icons";
import HomepageCards from "../components/HomepageCards";
import HomepageContact from "../components/HomepageContact";

const myfont = {
  fontFamily: "'Red Hat Display', sans-serif",
  fontSize: "1.3rem",
};

const Homepage = () => {
  const handleGetQuoteClick = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <>
      <div style={myfont}>
        <section
          className="hero"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div>
            <img
              src="/assets/F-PACE DASH done.png"
              alt=""
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div
            className="text-container"
            style={{
              position: "absolute",
              top: "9%",
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
              className="mt-sm-3 mt-lg-0"
              style={{
                fontSize: "5vw",
                fontFamily: "Digital-7",
                background: "none",
                "@media (maxWidth: 768px)": { fontSize: "4vw" },
                "@media (maxWidth: 576px)": { fontSize: "3vw" },
              }}
            >
              Welcome To Adblue Solution
            </h1>
          </div>

          <div
            style={{
              position: "absolute",
              top: "19%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "1",
              backgroundColor: "transparent",
            }}
          >
            <Button
              className="mt-sm-5 mt-lg-5"
              href="/contact"
              style={{
                fontSize: "1.9vw", // Increased font size for better readability on small screens
                padding: "1vw 1.5vw", // Increased padding for larger button size
                borderRadius: "10px",
                marginRight: "1vw", // Proportionate margin
                minWidth: "120px", // Adjusted minimum width for better visibility
              }}
            >
              Call Us
            </Button>

            <Button
              className="mt-sm-5 mt-lg-5"
              onClick={handleGetQuoteClick}
              style={{
                fontSize: "1.9vw", // Increased font size for better readability on small screens
                padding: "1vw 1.5vw", // Increased padding for larger button size
                borderRadius: "10px",
                minWidth: "120px", // Adjusted minimum width for better visibility
              }}
            >
              Get a Quote
            </Button>
          </div>
        </section>

        <section className="home-about container py-5" id="aboutSection">
          <h1 className="pb-1 text-center">It's What We Do</h1>
          <Row className="align-items-center">
            <Col md={6} className="text-md-start text-center">
              <div className="container">
                <h2 className="pb-1 pt-3">
                  Fully Mobile Service - We Come To You!
                </h2>
                <p className="pb-1">
                  Look no further than Adblue Solution for a trustworthy AdBlue
                  removal service right in your neighborhood! Our team of
                  certified AdBlue delete specialists are dedicated to providing
                  top-notch service at unbeatable prices. Plus, with our
                  convenient mobile service, we'll come to you wherever you are!
                </p>
                <p className="lead" style={{ fontWeight: "bold" }}>
                  THE PROCEDURE IS FULLY REVERSIBLE.
                </p>
                <p className="pb-1">
                  To have the procedure reversed starts at £100 for OBD and £140
                  for bench works plus traveling depending on location from the
                  base.
                </p>
                <p className="pb-1">
                  Trust Adblue Solution for reliable AdBlue removal right in
                  your neighborhood! Our certified specialists provide top-notch
                  service at unbeatable prices, with the added convenience of
                  our mobile service – we come to you!
                </p>
                <Button href="/about">Find out more about us</Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img
                style={{ height: "auto", maxWidth: "100%" }}
                className="img-fluid"
                src="/assets/van man white background no slogan.png"
                alt=""
              />
            </Col>
          </Row>
        </section>

        <section
          className="homepage-cards py-5 text-center"
          style={{ backgroundColor: "#1D1D1C" }}
          id="contactSection"
        >
          <Container className="py-5">
            <h1>So What Is Adblue?</h1>
            <Container>
              <p>
                AdBlue is a necessary component in modern diesel vehicles, but
                it can be costly and inconvenient. If you're tired of dealing
                with AdBlue issues, our expert removal service is the solution
                you need. With our electronic removal process, we'll eliminate
                AdBlue from your vehicle, putting an end to those annoying
                dashboard warnings and the need for constant refills.
              </p>
            </Container>
            <h3 className="pt-3 pb-3">Areas We Cover</h3>
            <Container className="d-flex justify-content-center">
              <img
                className="img-fluid w-50"
                src="/assets/araes we cover - map.svg"
                alt="areas we cover map"
              />
            </Container>
            <Container>
              <p className="pt-4">
                We currently cover the areas listed below and will be extending
                our coverage in due course!
              </p>
              <ul>
                <li style={{ paddingRight: "30px" }}>30 Mile radius of:</li>
                <ul>
                  <li style={{ paddingRight: "70px" }}>Cardiff</li>
                  <li style={{ paddingRight: "70px" }}>Worthing</li>
                  <li style={{ paddingRight: "70px" }}>St Helens</li>
                  <li style={{ paddingRight: "70px" }}>Bradford</li>
                </ul>
              </ul>
              <p>
                We will travel outside of the area for fleet services and
                multiple vehicle bookings.
              </p>
              <p>
                At Adblue Solution, we are dedicated to providing AdBlue
                solutions to customers across a wide geographic area. Our
                comprehensive coverage ensures that, no matter where you are,
                you can access the high-quality products and services you need
                to keep your vehicles running smoothly.
              </p>
              <p>
                With a focus on reliability and professionalism, our
                comprehensive coverage guarantees access to premium products and
                services essential for maintaining the smooth operation of your
                vehicles. Count on Adblue Solution to be your trusted partner in
                keeping your fleet running efficiently and responsibly.
              </p>
            </Container>
            <p className="lead pt-3" style={{ fontWeight: "bold" }}>
              Contact us today to get a quote!
            </p>
            <HomepageContact />
          </Container>
        </section>

        <section className="pb-3 mt-3" id="functionalitySection">
          <Container>
            <Row className="text-center g-4 pb-2">
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
                    <h3 className="card-title mb-3">
                      Full Vehicle Diagnostics
                    </h3>{" "}
                    {/* Updated title */}
                    <p className="card-text">
                      We conduct thorough vehicle diagnostic scans to fully
                      understand the issue before proceeding, ensuring safety
                      and reliability for our customers.
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

        <section
          className="homepage-cards py-5"
          style={{ backgroundColor: "#1D1D1C" }}
          id="cardsSection"
        >
          <HomepageCards />
        </section>
      </div>
    </>
  );
};

export default Homepage;
