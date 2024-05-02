import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useServices } from "../context/ServicesContext";

const IndividualService = () => {
  const { id } = useParams();
  const servicesData = useServices();

  // Find the service with the matching id
  const service = servicesData.find((service) => service.id === parseInt(id));

  // Check if service is found
  if (!service) {
    return <div>Service not found</div>;
  }

  // Destructure service properties
  const { name, description } = service;

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center pt-4">{name}</h2>
          <Container className="text-center w-75">
            <p className="lead pt-3">{description}</p>
          </Container>
          <div className="text-center pt-3">
            <Button href="/services">Back To All Servcies</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualService;
