import React from "react";

const HomepageCards = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card text-dark">
              {" "}
              {/* Remove bg-dark class */}
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop" />
                </div>
                <h3 className="card-title mb-3">Virtual</h3>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, quas quidem possimus dolorum esse eligendi?
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  {/* Change btn-primary to btn-dark */}
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card text-dark">
              {" "}
              {/* Remove bg-secondary class */}
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square" />
                </div>
                <h3 className="card-title mb-3">Hybrid</h3>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, quas quidem possimus dolorum esse eligendi?
                </p>
                <a href="#" className="btn btn-light">
                  {" "}
                  {/* Change btn-dark to btn-light */}
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card text-dark">
              {" "}
              {/* Remove bg-dark class */}
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-people" />
                </div>
                <h3 className="card-title mb-3">In Person</h3>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, quas quidem possimus dolorum esse eligendi?
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  {/* Change btn-primary to btn-dark */}
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageCards;
