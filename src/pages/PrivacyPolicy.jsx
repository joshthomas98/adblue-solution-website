import React from "react";
import { Container, Card } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="mt-4 pb-5">
      <Card>
        <Card.Body>
          <Card.Title>Privacy Policy</Card.Title>
          <Card.Text>
            This Privacy Policy describes how Allblue Solution collects, uses,
            and shares personal information of users of our website{" "}
            <a href="https://www.adbluesolution.co.uk">
              www.adbluesolution.co.uk
            </a>
            .
          </Card.Text>
          <Card.Title>Information We Collect:</Card.Title>
          <Card.Text>
            We may collect personal information, such as names and email
            addresses, that users voluntarily provide to us through our website.
          </Card.Text>
          <Card.Title>How We Use the Information:</Card.Title>
          <Card.Text>
            We use the information we collect to provide and improve our
            services, communicate with users, and respond to inquiries.
          </Card.Text>
          <Card.Title>Data Sharing:</Card.Title>
          <Card.Text>
            We do not share personal information with third parties unless
            required by law or with user consent.
          </Card.Text>
          <Card.Title>Data Security:</Card.Title>
          <Card.Text>
            We take reasonable measures to protect the confidentiality and
            security of users' personal information.
          </Card.Text>
          <Card.Title>Changes to This Privacy Policy:</Card.Title>
          <Card.Text>
            We may update our Privacy Policy from time to time. Users will be
            notified of any changes on this page.
          </Card.Text>
          <Card.Title>Contact Us:</Card.Title>
          <Card.Text>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:contact@email.com">info@adbluesolution.co.uk</a>.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;
