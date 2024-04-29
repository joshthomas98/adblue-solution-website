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
      <section className="hero">
        <img
          src="/src/assets/banner-2.jpeg"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
        <h1
          // className="gruppo"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#eee",
            textAlign: "center",
            background: "none",
            fontSize: "5rem",
          }}
        >
          Welcome To AdBlue Solution
        </h1>
      </section>

      <section className="home-about container py-5">
        <div className="row">
          <div className="col-md-4 offset-md-1">
            {" "}
            {/* Adjusted column width and offset */}
            <img
              style={{ height: "400px", width: "auto" }}
              className="img-fluid"
              src="/src/assets/van man white background no slogan.svg"
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
                ensure prompt and reliable solutions to your Adblue issues, as
                well as a wide range of other vehicle-related services. Your
                safety and satisfaction are our top priorities. Explore our
                comprehensive ECU services.
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
