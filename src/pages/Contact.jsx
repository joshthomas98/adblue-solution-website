import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import BasicSpinner from "../components/Spinner";
import { useMediaQuery } from "@material-ui/core";

const Contact = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("service_pxsno2o", "template_xruwh2x", formRef.current, {
        publicKey: "PoFl8JIIIpAgKzI",
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
        setIsLoading(false);
        formRef.current.reset();
        setFormInvalid(true);
      });
  };

  const handleFormChange = () => {
    const formFields = formRef.current.elements;
    let isFormInvalid = false;

    for (let field of formFields) {
      if (
        (field.tagName === "INPUT" || field.tagName === "TEXTAREA") &&
        !field.value.trim()
      ) {
        isFormInvalid = true;
        break;
      }
    }

    const subjectField = formFields.namedItem("subject");
    if (subjectField && !subjectField.value.trim()) {
      isFormInvalid = true;
    }

    setFormInvalid(isFormInvalid);
  };

  const isSmScreen = useMediaQuery("(max-width: 959px)");

  const handleCallButtonClick = () => {
    window.location.href = "tel:07944162191";
  };

  return (
    <>
      {isLoading && (
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

      <div id="contact" className="contact-area section-padding pb-4">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="pt-4">Get in Touch</h1>
            <p>
              Got any questions about us or the services we provide?
              <br />
              Get in touch with us by either sending us a message below or
              giving us a call, and we'll be happy to help.
            </p>
          </div>
          <div className="d-sm-center d-md-NORMAL">
            <div className="row">
              <div className="col-lg-8 px-4">
                <div className="contact">
                  <form
                    ref={formRef}
                    className="form"
                    name="enq"
                    method="post"
                    action="contact.php"
                    onSubmit={sendEmail}
                    onChange={handleFormChange}
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
                      <div className="form-group col-md-6 mb-3">
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
                          disabled={formInvalid}
                        >
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 pb-5 pt-0 pt-md-5 pt-lg-0">
                {isSmScreen ? (
                  <div className="d-sm-flex flex-column align-items-center justify-content-center justify-content-lg-start text-center">
                    <div className="single_address pt-4">
                      <a
                        href="mailto:info@adbluesolution.co.uk"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <div className="d-flex flex-column align-items-center">
                          <i
                            className="fa fa-envelope"
                            style={{ marginLeft: "15px", marginTop: "-20px" }}
                          />
                          <h4>Send your message</h4>
                        </div>
                        <p>info@adbluesolution.co.uk</p>
                      </a>
                    </div>
                    <div
                      className="single_address"
                      onClick={handleCallButtonClick}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex flex-column align-items-center">
                        <i
                          className="fa fa-phone"
                          style={{ marginLeft: "15px" }}
                        />
                        <h4>Call us on</h4>
                      </div>
                      <p>07944162191</p>
                    </div>
                    <div className="single_address">
                      <a
                        href="https://wa.link/adbluesolution"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div className="d-flex flex-column align-items-center pt-1">
                          <i
                            className="fa fa-whatsapp"
                            style={{ marginLeft: "15px" }}
                          />
                          <h4 className="text-dark">Contact us on WhatsApp</h4>
                        </div>
                        <p className="text-dark">
                          https://wa.link/adbluesolution
                        </p>
                      </a>
                    </div>
                    <div className="single_address">
                      <div className="d-flex flex-column align-items-center pt-1">
                        <i
                          className="fa fa-clock-o"
                          style={{ marginLeft: "15px" }}
                        />
                        <h4>Work Time</h4>
                      </div>
                      <p>
                        Mon - Fri: 09.00 - 17.00. <br />
                        Sat: 10.00 - 14.00
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="single_address">
                      <a
                        href="mailto:info@adbluesolution.co.uk"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <i className="fa fa-envelope" />
                        <h4>Send your message</h4>
                        <p>info@adbluesolution.co.uk</p>
                      </a>
                    </div>
                    <div
                      className="single_address"
                      onClick={handleCallButtonClick}
                      style={{ cursor: "pointer" }}
                    >
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
                        <p className="text-dark">
                          https://wa.link/adbluesolution
                        </p>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
