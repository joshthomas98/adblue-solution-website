import React from "react";
import { Container } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Terms &amp; Conditions</h2>
      <div className="px-2 ">
        <p>
          These terms and conditions outline the rules and regulations for the
          use of Allblue Solution's Website, located at www.adbluesolution.com.
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Allblue Solution if you do not
          agree to accept all of the terms and conditions stated on this page.
        </p>
        <h3>License</h3>
        <p>
          Unless otherwise stated, Allblue Solution and/or its licensors own the
          intellectual property rights for all material on Allblue Solution. All
          intellectual property rights are reserved. You may access this from
          Allblue Solution for your own personal use subjected to restrictions
          set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from Allblue Solution</li>
          <li>Sell, rent or sub-license material from Allblue Solution</li>
          <li>Reproduce, duplicate or copy material from Allblue Solution</li>
          <li>Redistribute content from Allblue Solution</li>
        </ul>
        <h3>Contact Information</h3>
        <p>
          Users may need to enter contact information and other details on the
          contact page for the purpose of receiving quotes, responding to
          customer queries, etc. We assure you that we won't misuse this
          information in any way and will only use it for the specified
          purposes.
        </p>
      </div>
      {/* Add more sections as necessary */}
    </Container>
  );
};

export default TermsAndConditions;
