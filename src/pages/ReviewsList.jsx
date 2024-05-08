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
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    const reviewsRef = ref(database, "reviews");
    onValue(reviewsRef, (snapshot) => {
      const reviewsData = snapshot.val();
      if (reviewsData) {
        const reviewsList = Object.values(reviewsData);
        // Sort the reviews by createdAt timestamp in descending order
        const sortedReviews = reviewsList.sort(
          (a, b) => b.createdAt - a.createdAt
        );
        setReviews(sortedReviews);
      } else {
        setReviews([]);
      }
      setLoading(false);
    });
  }, []); // Run only once on component mount

  // Function to sort reviews by most recent
  const sortByMostRecent = () => {
    const sortedReviews = [...reviews].sort(
      (a, b) => b.createdAt - a.createdAt
    );
    setReviews(sortedReviews);
    setActiveFilter("mostRecent");
  };

  // Function to sort reviews by highest rating
  const sortByHighestRating = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);
    setReviews(sortedReviews);
    setActiveFilter("highestRating");
  };

  // Function to sort reviews by lowest rating
  const sortByLowestRating = () => {
    const sortedReviews = [...reviews].sort((a, b) => a.rating - b.rating);
    setReviews(sortedReviews);
    setActiveFilter("lowestRating");
  };

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
            <div className="col-md-6 d-flex justify-content-end align-items-center pt-0 pb-3">
              <Button href="/reviewform">Write Review</Button>
            </div>
          </div>

          <div className="d-flex align-items-center pb-4">
            <p className="m-0 me-2">Sort by:</p>
            <div className="sort-by-buttons">
              <div
                className={`border btn btn-light rounded-pill me-1 ${
                  activeFilter === "mostRecent" ? "active" : ""
                }`}
                onClick={sortByMostRecent}
              >
                Most Recent
              </div>
              <div
                className={`border btn btn-light rounded-pill me-1 ${
                  activeFilter === "highestRating" ? "active" : ""
                }`}
                onClick={sortByHighestRating}
              >
                Highest
              </div>
              <div
                className={`border btn btn-light rounded-pill me-1 ${
                  activeFilter === "lowestRating" ? "active" : ""
                }`}
                onClick={sortByLowestRating}
              >
                Lowest
              </div>
            </div>
          </div>

          <ListGroup className="pb-5">
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
