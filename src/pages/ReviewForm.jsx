import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../Firebase";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react"; // Import Chakra UI Spinner
import StarRating from "../components/StarRating";

const ReviewForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true); // Start loading when form is submitted

    const reviewsRef = ref(database, "reviews");
    const newReview = {
      name: name,
      location: location,
      rating: rating,
      review: review,
      createdAt: Date.now(),
    };

    // Push the new review to the database
    push(reviewsRef, newReview)
      .then(() => {
        console.log("Review submitted successfully");
        // Reset form fields
        setName("");
        setLocation("");
        setRating(0);
        setReview("");
        // Navigate to the success page after successful submission
        navigate("/reviewsubmittedsuccessfully");
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      })
      .finally(() => {
        // Ensure isLoading is set to false regardless of success or error
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* Blur background if loading */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(5px)",
            zIndex: "1",
          }}
        />
      )}

      <Container>
        <h2 className="pt-4 pb-3">Submit a Review</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Enter your name here"
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
                  placeholder="Enter your location here"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="pt-2" controlId="formRating">
                <Form.Label>Rating:</Form.Label>
                <StarRating
                  selectedRating={selectedRating}
                  setSelectedRating={setSelectedRating}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="pt-2" controlId="formReview">
                <Form.Label>Review:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={review}
                  placeholder="Type your review here"
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
      {/* Spinner */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
    </>
  );
};

export default ReviewForm;
