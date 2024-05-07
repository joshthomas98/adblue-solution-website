import React from "react";

const Disclaimer = () => {
  return (
    <>
      <div className="p-5 bg-dark text-center">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2 className="pb-3">Legal Disclaimer and Guidance</h2>
              <div className="container">
                <p>
                  <span style={{ fontWeight: "bold" }}>DISCLAIMER:</span> Adblue
                  Solution does not advocate or endorse the removal of AdBlue
                  systems from vehicles without proper consideration of legal
                  regulations. We encourage our customers to prioritize
                  compliance with emissions standards and to seek professional
                  advice when considering modifications to their vehicles.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Final Note:</span> The
                  information provided here is for general guidance purposes
                  only and should not be construed as legal advice. It is your
                  responsibility to conduct thorough research and consult with
                  appropriate authorities to ensure compliance with all
                  applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
