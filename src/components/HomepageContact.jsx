import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import BasicSpinner from "./Spinner";

const Contact = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm("service_d38c8w8", "template_66mn5h7", formRef.current, {
        publicKey: "JdEmvpiqWHQDGE7TP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/messagesent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsLoading(false); // Set isLoading back to false after API call completes
        e.target.reset();
      });
  };

  return (
    <>
      {isLoading && (
        // Show a semi-transparent background and a spinner while loading
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(5px)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <BasicSpinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="contact">
            <form
              ref={formRef}
              className="form"
              name="enq"
              method="post"
              action="contact.php"
              onSubmit="return validation();"
            >
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 pb-sm-3">
                  <input
                    type="text"
                    name="vehicle_registration"
                    className="form-control"
                    placeholder="Vehicle Registration"
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 pb-sm-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6 pb-sm-3">
                  <input
                    type="tel"
                    name="contact_number"
                    className="form-control"
                    placeholder="Contact Number"
                    required="required"
                  />
                </div>
                <div className="form-group col-md-12 pb-sm-3 d-flex justify-content-center">
                  <select
                    name="area"
                    className="form-control"
                    required="required"
                  >
                    <option value="">Select Area</option>
                    <option value="1">Area 1</option>
                    <option value="2">Area 2</option>
                    <option value="3">Area 3</option>
                    <option value="4">Area 4</option>
                  </select>
                </div>
                <div className="form-group col-md-12 mb-3">
                  <textarea
                    rows={6}
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    required="required"
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <Button
                    type="submit"
                    value="Send message"
                    name="submit"
                    id="submitButton"
                    className="btn btn-contact-bg rounded-pill"
                    title="Submit Your Message!"
                    style={{ maxWidth: "150px" }}
                    href="/messagesent"
                    onClick={sendEmail}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
