import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { useServices } from "../context/ServicesContext";
import { Container, Button } from "react-bootstrap";

const Services = () => {
  const servicesData = useServices();

  return (
    <div>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2 style={{ display: "inline-block", marginRight: "10px" }}>
                  <span style={{ color: "#20257B" }}>Services We Offer</span>
                </h2>
                <p className="lead" style={{ display: "inline-block" }}>
                  Starting offer from £275.00
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {servicesData.map((service) => (
              <div className="col-sm-6 col-lg-4" key={service.id}>
                <div className="feature-box-1">
                  <div className="icon">
                    <i
                      className={service.iconClass}
                      style={{
                        color: "#20257B",
                        paddingRight: "5px",
                        paddingLeft: "5px",
                      }}
                    />
                  </div>
                  <div className="feature-content px-2 py-1">
                    <h5>{service.name}</h5>
                    <p className="pb-3">{service.shortDescription}</p>
                    <a
                      href={
                        service.id === 12
                          ? "/contact"
                          : `/individual-service/${service.id}`
                      }
                    >
                      <Button variant="primary">Learn More</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Container className="d-flex justify-content-center pt-3">
            <img
              className="img-fluid"
              style={{ width: "300px" }}
              src="/assets/credit card CROPED WITH BLUE BACK FOR CONTACT US PAGE 2.svg"
              alt="card"
            />
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Services;
