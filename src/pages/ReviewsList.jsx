import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase";
import { Button, Container, ListGroup } from "react-bootstrap";
import BasicSpinner from "../components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingStars = ({ rating }) => {
  const fullStars = Array.from({ length: rating }, (_, index) => (
    <div
      key={index}
      style={{ display: "inline-block", backgroundColor: "#ffffff" }}
    >
      <FontAwesomeIcon
        icon={faStar}
        style={{ color: "#FFD700", backgroundColor: "#ffffff" }}
      />
    </div>
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <div
      key={index + rating}
      style={{ display: "inline-block", backgroundColor: "#ffffff" }}
    >
      <FontAwesomeIcon
        icon={faStar}
        style={{ color: "#C0C0C0", backgroundColor: "#ffffff" }}
      />
    </div>
  ));

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {fullStars}
      {emptyStars}
    </div>
  );
};

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    });
  }, []); // Run only once on component mount

  return (
    <div>
      {loading ? ( // Render spinner if loading is true
        <BasicSpinner />
      ) : (
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
              <div className="border btn btn-light rounded-pill me-1">
                Lowest
              </div>
            </div>
          </div>

          <ListGroup>
            {reviews.map((review, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center">
                <div className="circle-image">{review.name[0]}</div>
                <div className="review-details ms-3">
                  <strong>{review.name}</strong>
                  <p style={{ backgroundColor: "#ffffff" }}>
                    Location: {review.location}
                  </p>
                  <p style={{ backgroundColor: "#ffffff" }}>
                    Rating: <RatingStars rating={review.rating} />
                  </p>
                  <p style={{ backgroundColor: "#ffffff" }}>
                    Review: {review.review}
                  </p>
                  <p style={{ backgroundColor: "#ffffff" }}>
                    Posted At: {new Date(review.createdAt).toLocaleString()}
                  </p>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      )}
    </div>
  );
};

export default ReviewsList;
