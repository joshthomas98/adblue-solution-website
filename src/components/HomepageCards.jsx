import React from "react";

const HomepageCards = () => {
  return (
    <section
      id="venue-functionality_boxes"
      className="p-5 text-light"
      style={{ backgroundColor: "#1D1D1C" }}
    >
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div
              className="homepage-card mb-4"
              style={{ backgroundColor: "#373737" }}
            >
              <div
                className="card-body text-center p-3"
                style={{ backgroundColor: "#373737" }}
              >
                <div className="h1 mb-3">
                  <i className="bi bi-search"></i>
                </div>
                <h3
                  className="card-title mb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  Book Your Acts
                </h3>
                <p className="card-text" style={{ backgroundColor: "#373737" }}>
                  Ready for live music? Discover a varied artist lineup for your
                  venue. Filter by genre, location, and availability to find
                  exact matches for your requirements.
                </p>
                <button className="btn btn-primary text-light my-2">
                  Book Artists
                </button>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div
              className="homepage-card"
              style={{ backgroundColor: "#373737" }}
            >
              <div
                className="card-body text-center p-3"
                style={{ backgroundColor: "#373737" }}
              >
                <div className="h1 mb-3">
                  <i className="bi bi-search"></i>
                </div>
                <h3
                  className="card-title mb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  Book Your Acts
                </h3>
                <p className="card-text" style={{ backgroundColor: "#373737" }}>
                  Ready for live music? Discover a varied artist lineup for your
                  venue. Filter by genre, location, and availability to find
                  exact matches for your requirements.
                </p>
                <button className="btn btn-primary text-light my-2">
                  Book Artists
                </button>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div
              className="homepage-card"
              style={{ backgroundColor: "#373737" }}
            >
              <div
                className="card-body text-center p-3"
                style={{ backgroundColor: "#373737" }}
              >
                <div className="h1 mb-3">
                  <i className="bi bi-search"></i>
                </div>
                <h3
                  className="card-title mb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  Book Your Acts
                </h3>
                <p className="card-text" style={{ backgroundColor: "#373737" }}>
                  Ready for live music? Discover a varied artist lineup for your
                  venue. Filter by genre, location, and availability to find
                  exact matches for your requirements.
                </p>
                <button className="btn btn-primary text-light my-2">
                  Book Artists
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageCards;
