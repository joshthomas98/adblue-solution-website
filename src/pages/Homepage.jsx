import React from "react";
import HomepageCards from "../components/HomepageCards";
import { Button } from "react-bootstrap";

const myfont = {
  fontFamily: "'Red Hat Display', sans-serif",
  fontSize: "1.3rem",
};

const Homepage = () => {
  return (
    <div style={myfont}>
      <section
        className="hero"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img
          src="/src/assets/banner-2.jpeg"
          alt=""
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div
          className="text-container"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            background: "none", // Set background to none to make it transparent
            maxWidth: "80%", // Limit width to 80% of the viewport width
            zIndex: "1",
          }}
        >
          <h1
            style={{
              fontSize: "5vw", // Responsive font size based on viewport width
              background: "none",
              "@media (max-width: 768px)": {
                fontSize: "4vw", // Adjust font size for smaller screens
              },
              "@media (max-width: 576px)": {
                fontSize: "3vw", // Adjust font size for even smaller screens
              },
            }}
          >
            Welcome To AdBlue Solution
          </h1>
        </div>
      </section>

      <section className="home-about container py-5">
        <div className="row">
          <div className="col-md-4 offset-md-1">
            {" "}
            {/* Adjusted column width and offset */}
            <img
              style={{ height: "400px", width: "auto" }}
              className="img-fluid"
              src="src/assets/van man white background no slogan.png"
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            {" "}
            {/* Adjusted column width */}
            <div className="container">
              <h2 className="pb-1">It's What We Do</h2>
              <p className="pb-1">
                UK specialists in Adblue delete services. Our experienced
                technicians, cutting-edge equipment, and thorough diagnostics
                software ensure prompt and reliable solutions to your Adblue
                issues, as well as a wide range of other vehicle-related
                services. Your safety and satisfaction are our top priorities.
                Explore our comprehensive list of services and get a free quote
                today.
              </p>
              <Button href="/about">Find out more about us</Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="homepage-cards py-5"
        style={{ backgroundColor: "#1D1D1C" }}
      >
        <HomepageCards />
      </section>
    </div>
  );
};

export default Homepage;
