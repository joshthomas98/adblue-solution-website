import React from "react";
import { Container } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Terms &amp; Conditions</h2>
      <p>
        These terms and conditions outline the rules and regulations for the use
        of AdBlue Solution's Website, located at www.adbluesolution.com.
      </p>
      <p>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use AdBlue Solution if you do not agree
        to accept all of the terms and conditions stated on this page.
      </p>
      <h3>License</h3>
      <p>
        Unless otherwise stated, AdBlue Solution and/or its licensors own the
        intellectual property rights for all material on AdBlue Solution. All
        intellectual property rights are reserved. You may access this from
        AdBlue Solution for your own personal use subjected to restrictions set
        in these terms and conditions.
      </p>
      <p>You must not:</p>
      <ul>
        <li>Republish material from AdBlue Solution</li>
        <li>Sell, rent or sub-license material from AdBlue Solution</li>
        <li>Reproduce, duplicate or copy material from AdBlue Solution</li>
        <li>Redistribute content from AdBlue Solution</li>
      </ul>
      <p>
        This Agreement shall begin on the date hereof. Our Terms and Conditions
        were created with the help of the{" "}
        <a href="https://www.termsandconditionsgenerator.com">
          Terms And Conditions Generator
        </a>{" "}
        and the{" "}
        <a href="https://www.privacypolicyonline.com/terms-conditions-generator/">
          Privacy Policy Generator
        </a>
        .
      </p>
      <h3>Contact Information</h3>
      <p>
        Users may need to enter contact information and other details on the
        contact page for the purpose of receiving quotes, responding to customer
        queries, etc. We assure you that we won't misuse this information in any
        way and will only use it for the specified purposes.
      </p>
      {/* Add more sections as necessary */}
    </Container>
  );
};

export default TermsAndConditions;
