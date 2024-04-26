import React from "react";

const About = () => {
  return (
    <>
      <section id="learn" className="p-5">
        <h1 className="text-center pb-3">About Us</h1>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src="/src/assets/Can man  habd on hip and thumbs up good hand black background.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md p-5">
              <h2>Who We Are</h2>
              <p className="lead">
                Adblue Solution are a group of Adblue delete specialists based
                throughout the UK.
              </p>
              <p>
                We only use technicians with a high level of experience and
                expertise with an average of 18 years in the business, and we
                only use the latest in ECU programming equipment (NO CHINESE
                CLONES) and OUR software which is fully supported by the
                software developers should we ever need it.
              </p>
              <p>
                We will do a full vehicle diagnostic scan to check all of the
                cars software and modules so we have a full understanding of
                what we are dealing with and know exactly what the issue is
                before we carry out any work. So as a customer you can be rest
                assured that you are in safe hands at all times.
              </p>
              <p>
                Our goal is to keep you on or get you back on the road without
                any Adblue Issues, so our customers are always our top priority
                and we won’t keep you waiting for days to get a confirmed
                booking.
              </p>
              <p>
                We offer a complete ECU service, not just Adblue delete. For
                more information please see our services page.
              </p>
              <a href="/services" className="btn btn-light mt-3">
                <i
                  className="fa fa-chevron-right"
                  style={{ marginRight: "10px" }}
                ></i>
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" className="p-5 bg-dark text-dark">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2 className="pb-3">Legal Disclaimer and Guidance</h2>
              <p>
                DISCLAIMER: Adblue Solution does not advocate or endorse the
                removal of AdBlue systems from vehicles without proper
                consideration of legal regulations. We encourage our customers
                to prioritize compliance with emissions standards and to seek
                professional advice when considering modifications to their
                vehicles.
              </p>
              <p>
                Final Note: The information provided here is for general
                guidance purposes only and should not be construed as legal
                advice. It is your responsibility to conduct thorough research
                and consult with appropriate authorities to ensure compliance
                with all applicable laws and regulations.
              </p>
            </div>
            <div className="col-md">
              <img
                src="/src/assets/Can man  habd on hip and thumbs up good hand black background.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
