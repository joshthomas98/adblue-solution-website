import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import BasicSpinner from "./Spinner";

const Contact = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(true);

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
        setIsLoading(false);
        formRef.current.reset();
        setFormInvalid(true); // Reset form validation state
      });
  };

  const handleFormChange = () => {
    const formFields = formRef.current.elements;
    let isFormInvalid = false;

    // Check if any field is empty
    for (let field of formFields) {
      if (
        (field.tagName === "INPUT" || field.tagName === "TEXTAREA") &&
        !field.value.trim()
      ) {
        isFormInvalid = true;
        break;
      }
    }

    // Check if the selected option in the dropdown menu is not "Select Area"
    const areaSelect = formFields.namedItem("area");
    if (areaSelect && areaSelect.value === "") {
      isFormInvalid = true;
    }

    setFormInvalid(isFormInvalid);
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

      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="contact">
            <form
              ref={formRef}
              className="form"
              name="enq"
              method="post"
              action="contact.php"
              onSubmit={sendEmail}
              onChange={handleFormChange} // Attach handleFormChange to onChange event
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
                    type="text"
                    name="vehicle_registration"
                    className="form-control"
                    placeholder="Vehicle Registration"
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
                <div className="form-group col-md-6 pb-sm-3">
                  <input
                    type="tel"
                    name="contact_number"
                    className="form-control"
                    placeholder="Contact Number"
                    required
                  />
                </div>
                <div className="form-group col-md-12 pb-sm-3 d-flex justify-content-center">
                  <select name="area" className="form-control" required>
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
                    required
                  ></textarea>
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
      </div>
    </>
  );
};

export default Contact;
