import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase";
import { Button, Container, ListGroup } from "react-bootstrap";

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
        <div className="row">
          <div className="col-md-6">
            <h2 className="pt-4 pb-3 myfont" style={{ fontSize: "2rem" }}>
              See What Our Customers Had To Say
            </h2>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <Button href="/reviewform">Write Review</Button>
          </div>
        </div>

        <div className="d-flex align-items-center pb-4">
          <p className="m-0 me-2">Sort by:</p>
          <div className="sort-by-buttons">
            <div className="border btn btn-light rounded-pill me-1">
              Most Recent
            </div>
            <div className="border btn btn-light rounded-pill me-1">
              Highest
            </div>
            <div className="border btn btn-light rounded-pill me-1">Lowest</div>
          </div>
        </div>

        <ListGroup>
          {reviews.map((review, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center">
              <div className="circle-image">{review.name[0]}</div>
              <div className="review-details ms-3">
                <strong
                  style={{
                    marginBottom: "0.5rem",
                    display: "block",
                    backgroundColor: "white",
                  }}
                >
                  {review.name}
                </strong>
                <p
                  style={{
                    marginBottom: "0.5rem",
                    display: "block",
                    backgroundColor: "white",
                  }}
                >
                  Location: {review.location}
                </p>
                <p
                  style={{
                    marginBottom: "0.5rem",
                    display: "block",
                    backgroundColor: "white",
                  }}
                >
                  Rating: {review.rating}
                </p>
                <p
                  style={{
                    marginBottom: "0.5rem",
                    display: "block",
                    backgroundColor: "white",
                  }}
                >
                  Review: {review.review}
                </p>
                <p
                  style={{
                    marginBottom: "0.5rem",
                    display: "block",
                    backgroundColor: "white",
                  }}
                >
                  Created At: {new Date(review.createdAt).toLocaleString()}
                </p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ReviewsList;
