import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewSubmitted = () => {
  return (
    <Container className="text-center">
      <h2 className="pt-4 pb-3">Review Submitted Successfully!</h2>
      <p>Thank you for your review. Your feedback is valuable to us.</p>
      <Button as={Link} to="/" variant="primary" className="mt-3">
        Go Back to Homepage
      </Button>
    </Container>
  );
};

export default ReviewSubmitted;
