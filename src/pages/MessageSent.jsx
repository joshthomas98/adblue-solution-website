import React, { useEffect } from "react";

const MessageSent = () => {
  useEffect(() => {
    // Instantly scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="mail-seccess section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12">
              {/* Error Inner */}
              <div className="success-inner">
                <h1>
                  <i className="fa fa-envelope" />
                  <span>Your Message Was Sent Successfully!</span>
                </h1>
                <div className="container">
                  <p className="lead text-center">
                    Thanks for getting in touch. <br />
                    We've received your message and aim to respond to you as
                    soon as we can.
                  </p>
                </div>
                <a href="/" className="btn btn-primary btn-lg mb-4">
                  Go Home
                </a>
              </div>
              {/*/ End Error Inner */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessageSent;
