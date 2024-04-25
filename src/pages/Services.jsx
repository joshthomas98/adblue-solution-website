import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Services = () => {
  return (
    <div>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>
                  <span style={{ color: "#20257B" }}>It's {""}</span>
                  <span className="text-danger">What We Do</span>
                </h2>
                <p>
                  Here are the services we offer at AdBlue Solution to enhance
                  your vehicle's performance and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Reamps & Tuning */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i
                    className="fa fa-wrench px-1"
                    style={{ color: "#20257B" }}
                  />{" "}
                  {/* Replace with a more relevant icon */}
                </div>
                <div className="feature-content px-2 py-1">
                  <h5>Reamps & Tuning</h5>
                  <p>
                    Enhance your vehicle's performance with our professional
                    remapping and tuning services.
                  </p>
                </div>
              </div>
            </div>
            {/* Stage 1 Reamps */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i
                    className="fa fa-chart-line px-1"
                    style={{ color: "#20257B" }}
                  />{" "}
                  {/* Replace with a more relevant icon */}
                </div>
                <div className="feature-content px-2 py-1">
                  <h5>Stage 1 Reamps</h5>
                  <p>
                    Optimize your vehicle's power and torque output with our
                    Stage 1 remapping solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* EGR Deletes */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-ban px-1" style={{ color: "#20257B" }} />
                </div>
                <div className="feature-content px-2 py-1">
                  <h5>EGR Deletes</h5>
                  <p>
                    Improve your vehicle's performance and reliability by
                    eliminating the EGR system.
                  </p>
                </div>
              </div>
            </div>
            {/* DPF Deletes */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i
                    className="fa fa-filter px-1"
                    style={{ color: "#20257B" }}
                  />{" "}
                  {/* Replace with a more relevant icon */}
                </div>
                <div className="feature-content px-2 py-1">
                  <h5>DPF Deletes</h5>
                  <p>
                    Increase your vehicle's efficiency and responsiveness by
                    removing the DPF system.
                  </p>
                </div>
              </div>
            </div>
            {/* AdBlue Delete / Removal */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i
                    className="fa fa-times-circle px-1"
                    style={{ color: "#20257B" }}
                  />
                </div>
                <div className="feature-content px-2 py-1">
                  <h5>AdBlue Delete / Removal</h5>
                  <p>
                    Eliminate AdBlue-related issues and optimize performance
                    with our AdBlue delete services.
                  </p>
                </div>
              </div>
            </div>
            {/* VAG Remapping */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-car px-1" style={{ color: "#20257B" }} />
                </div>
                <div className="feature-content px-2 py-1">
                  <h5>VAG Remapping</h5>
                  <p>
                    Unlock the full potential of your vehicle with our VAG
                    remapping services.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              {/* Gearbox Remapping */}
              <div className="col-sm-6 col-lg-4 mx-3">
                <div className="feature-box-1">
                  <div className="icon">
                    <i
                      className="fa fa-cogs px-1"
                      style={{ color: "#20257B" }}
                    />
                  </div>
                  <div className="feature-content px-2 py-1">
                    <h5>Gearbox Remapping</h5>
                    <p>
                      Improve the performance and efficiency of your vehicle
                      with our gearbox remapping solutions.
                    </p>
                  </div>
                </div>
              </div>
              {/* Precision Performance Package */}
              <div className="col-sm-6 col-lg-4 mx-3">
                <div className="feature-box-1">
                  <div className="icon">
                    <i
                      className="fa fa-tachometer-alt px-1"
                      style={{ color: "#20257B" }}
                    />{" "}
                    {/* Replace with a more relevant icon */}
                  </div>
                  <div className="feature-content px-2 py-1">
                    <h5>Precision Performance Package</h5>
                    <p>
                      Experience ultimate performance and reliability with our
                      precision performance packages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
