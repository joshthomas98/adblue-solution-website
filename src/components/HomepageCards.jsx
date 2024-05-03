import React from "react";
import { Button } from "react-bootstrap";

const HomepageCards = () => {
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
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md px-4">
            <div
              className="card bg-dark text-light"
              style={{ backgroundColor: "#373737" }}
            >
              <div
                className="card-body text-center"
                style={{ backgroundColor: "#373737" }}
              >
                <div className="h1 mb-3">
                  <i className="bi bi-laptop" />
                </div>
                <h3
                  className="card-title mb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  John
                </h3>
                <p className="lead" style={{ backgroundColor: "#373737" }}>
                  Cardiff
                </p>
                <p
                  className="card-text pb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  AdBlue Solution did a fantastic job, absolutely top notch!
                  Would highly recommend.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div
              className="card bg-dark text-light"
              style={{ backgroundColor: "#373737" }}
            >
              <div
                className="card-body text-center"
                style={{ backgroundColor: "#373737" }}
              >
                <div className="h1 mb-3">
                  <i className="bi bi-person-square" />
                </div>
                <h3
                  className="card-title mb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  Steven
                </h3>
                <p className="lead" style={{ backgroundColor: "#373737" }}>
                  Bristol
                </p>
                <p
                  className="card-text pb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  AdBlue Solution exceeded my expectations! Highly recommend
                  their services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md px-4 mb-sm-4">
            <div
              className="card bg-dark text-light"
              style={{ backgroundColor: "#373737" }}
            >
              <div
                className="card-body text-center"
                style={{ backgroundColor: "#373737" }}
              >
                <div className="h1 mb-3">
                  <i className="bi bi-people" />
                </div>
                <h3
                  className="card-title mb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  Mark
                </h3>
                <p className="lead" style={{ backgroundColor: "#373737" }}>
                  London
                </p>
                <p
                  className="card-text pb-3"
                  style={{ backgroundColor: "#373737" }}
                >
                  AdBlue Solution delivered exceptional service, couldn't be
                  happier! Highly recommended!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-center text-light pt-5"
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
