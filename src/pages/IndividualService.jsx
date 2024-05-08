import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useServices } from "../context/ServicesContext";

const IndividualService = () => {
  const { id } = useParams();
  const servicesData = useServices();

  const service = servicesData.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  const { name, description } = service;

  useEffect(() => {
    // Instantly scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center pt-4">{name}</h2>
          <Container className="text-center w-75">
            <p className="lead pt-3">{description}</p>
          </Container>
          <div className="text-center pt-3 pb-5">
            <Button href="/services">Back To All Services</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualService;
