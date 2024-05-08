import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HomepageCards = ({ reviews }) => {
  const truncateReview = (review) => {
    const words = review.split(" ");
    if (words.length > 14) {
      return words.slice(0, 17).join(" ") + "...";
    }
    return review;
  };

  return (
    <>
      <div>
        <h2
          className="text-center text-light pb-5"
          style={{ backgroundColor: "#1D1D1C" }}
        >
          See What Our Recent Customers Had To Say
        </h2>
      </div>
      <div className="container px-3">
        <div className="row text-center g-4">
          {reviews.map((review, index) => (
            <div key={index} className="col-md-4 pb-0">
              {" "}
              {/* Adjusted column size */}
              <div
                className="card bg-dark text-light"
                style={{ backgroundColor: "#373737" }}
              >
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#373737" }}
                >
                  <h3
                    className="card-title mb-3 mt-2"
                    style={{ backgroundColor: "#373737" }}
                  >
                    {review.name}
                  </h3>
                  <p className="lead" style={{ backgroundColor: "#373737" }}>
                    {review.location}
                  </p>
                  <div
                    className="pb-3"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#373737",
                    }}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{
                          color: "#FFD700",
                          marginRight: "2px",
                          backgroundColor: "#373737",
                        }}
                      />
                    ))}
                  </div>
                  <p
                    className="card-text pb-3"
                    style={{ backgroundColor: "#373737" }}
                  >
                    {truncateReview(review.review)}
                    <br />
                    {review.review.split(" ").length > 15 && (
                      <Button href="/reviewslist" className="mt-3" size="sm">
                        Read More
                      </Button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2
          className="text-center text-light pt-5 px-5"
          style={{ backgroundColor: "#1D1D1C" }}
        >
          Want to read more customer reviews or leave a review of your own?
          <br />
          <div className="mt-3 pb-2" style={{ backgroundColor: "#1D1D1C" }}>
            Click the button below to go to our reviews page.
          </div>
        </h2>
      </div>

      <div
        className="text-center pt-3 pb-4"
        style={{ backgroundColor: "#1D1D1C" }}
      >
        <Button href="/reviewslist">Go To Reviews</Button>
      </div>
    </>
  );
};

export default HomepageCards;
