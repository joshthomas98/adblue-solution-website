import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const IndividualService = () => {
  const location = useLocation();
  const { id } = useParams();
  const { state } = location;
  const servicesData = state && state.service;
  const [service, setService] = useState(null);

  useEffect(() => {
    // Find the service data based on the ID
    const selectedService = servicesData.find(
      (item) => item.id === parseInt(id)
    );
    setService(selectedService);
  }, [id, servicesData]);

  // Function to render service details
  const renderServiceDetails = () => {
    if (!service) return null;

    return (
      <Container>
        <Row>
          <Col>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            {/* Add more detailed information about the service */}
          </Col>
        </Row>
      </Container>
    );
  };

  return <div>{renderServiceDetails()}</div>;
};

export default IndividualService;
