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
            Welcome To Adblue Solution
          </h1>
        </div>
      </section>

      <section className="home-about container py-5">
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
                Trust Adblue Solution for reliable AdBlue removal right in your
                neighborhood! Our certified specialists provide top-notch
                service at unbeatable prices, with the added convenience of our
                mobile service – we come to you!
              </p>
              <Button href="/about">Find out more about us</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              style={{ height: "auto", maxWidth: "100%" }}
              className="img-fluid"
              src="src/assets/van man white background no slogan.png"
              alt=""
            />
          </Col>
        </Row>
      </section>

      <section
        className="homepage-cards py-5"
        style={{ backgroundColor: "#1D1D1C" }}
      >
        <Container className="py-5">
          <h1 className="text-center">So What Is Adblue?</h1>
          <Container>
            <p className="text-center">
              AdBlue is a necessary component in modern diesel vehicles, but it
              can be costly and inconvenient. If you're tired of dealing with
              AdBlue issues, our expert removal service is the solution you
              need. With our electronic removal process, we'll eliminate AdBlue
              from your vehicle, putting an end to those annoying dashboard
              warnings and the need for constant refills.
            </p>
          </Container>
          <p className="lead text-center">
            Contact us today to learn more and book your appointment!
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="contact">
                <form
                  className="form"
                  name="enq"
                  method="post"
                  action="contact.php"
                  onSubmit="return validation();"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6 pb-sm-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <textarea
                        rows={6}
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <Button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="btn btn-contact-bg rounded-pill"
                        title="Submit Your Message!"
                        style={{ maxWidth: "150px" }}
                        href="/messagesent"
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
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

      <section
        className="homepage-cards py-5"
        style={{ backgroundColor: "#1D1D1C" }}
      >
        <HomepageCards />
      </section>
    </div>
  );
};

export default Homepage;
