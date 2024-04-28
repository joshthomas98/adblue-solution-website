import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../Firebase";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; // Import Container, Row, Col from React Bootstrap
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const reviewsRef = ref(database, "reviews");
    const newReview = {
      name: name,
      location: location,
      rating: rating,
      review: review,
      createdAt: Date.now(),
    };

    push(reviewsRef, newReview).then(() => {
      console.log("Review submitted successfully");
      // Reset form fields
      setName("");
      setLocation("");
      setRating(0);
      setReview("");
    });

    navigate("/reviewsubmittedsuccessfully").catch((error) => {
      console.error("Error submitting review:", error);
    });
  };

  return (
    <Container>
      {" "}
      {/* Wrap the form in a Container */}
      <h2 className="pt-4 pb-3">Submit a Review</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          {" "}
          {/* Use Row and Col for layout */}
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLocation">
              <Form.Label>Location:</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formRating">
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formReview">
              <Form.Label>Review:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button className="mt-3" variant="primary" type="submit">
          Submit Review
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewForm;
