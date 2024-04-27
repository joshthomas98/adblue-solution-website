import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          <h2>{name}</h2>
          <p>{description}</p>
          {/* Add more detailed information about the service */}
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualService;
