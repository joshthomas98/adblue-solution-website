import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import BasicSpinner from "../components/Spinner";

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

      <div id="contact" className="contact-area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="pt-4">Get in Touch</h1>
            <p>
              Got any questions about us or the services we provide?
              <br />
              Get in touch with us by either sending us a message below or
              giving us a call and we'll be happy to help.
            </p>
          </div>
          <div style={{ marginLeft: "170px" }}>
            <div className="row">
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
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 pb-sm-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 mb-3">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 mb-3">
                        <textarea
                          rows={6}
                          name="message"
                          className="form-control"
                          placeholder="Your Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12 text-center">
                        <Button
                          type="submit"
                          className="btn btn-contact-bg rounded-pill"
                          style={{ maxWidth: "150px" }}
                          onClick={sendEmail}
                        >
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 pt-md-4">
                <div className="single_address">
                  <i className="fa fa-envelope" />
                  <h4>Send your message</h4>
                  <p>info@adbluesolution.co.uk</p>
                </div>
                <div className="single_address">
                  <i className="fa fa-phone" />
                  <h4>Call us on</h4>
                  <p>07944162191</p>
                </div>
                <div className="single_address">
                  <a
                    href="https://wa.link/adbluesolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="fa fa-whatsapp" />
                    <h4 className="text-dark">Contact us on WhatsApp</h4>
                    <p className="text-dark">https://wa.link/adbluesolution</p>
                  </a>
                </div>
                <div className="single_address">
                  <i className="fa fa-clock-o" />
                  <h4>Work Time</h4>
                  <p>
                    Mon - Fri: 09.00 - 17.00. <br />
                    Sat: 10.00 - 14.00
                  </p>
                </div>
              </div>
              {/*- END COL */}
            </div>
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
    </>
  );
};

export default Contact;
