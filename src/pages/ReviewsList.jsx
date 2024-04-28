import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase";
import { Container, ListGroup } from "react-bootstrap";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewsRef = ref(database, "reviews");
    onValue(reviewsRef, (snapshot) => {
      const reviewsData = snapshot.val();
      if (reviewsData) {
        const reviewsList = Object.values(reviewsData);
        setReviews(reviewsList);
      } else {
        setReviews([]);
      }
    });
  }, []); // Run only once on component mount

  return (
    <div>
      <Container>
        <h2 className="pt-4 pb-3">Reviews List</h2>
        <ListGroup>
          {reviews.map((review, index) => (
            <ListGroup.Item key={index}>
              <strong>Name:</strong> {review.name}
              <br />
              <strong>Location:</strong> {review.location}
              <br />
              <strong>Rating:</strong> {review.rating}
              <br />
              <strong>Review:</strong> {review.review}
              <br />
              <strong>Created At:</strong>{" "}
              {new Date(review.createdAt).toLocaleString()}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ReviewsList;
