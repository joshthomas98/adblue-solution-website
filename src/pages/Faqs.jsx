import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FaqAccordion = () => {
  return (
    <>
      <h2 className="text-dark text-center pt-4 pb-3 px-2">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="d-flex justify-content-center pb-5">
        <Accordion className="w-75">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is Adblue Solution?</Accordion.Header>
            <Accordion.Body>
              <em>
                Adblue Solution is a group of specialists in Adblue deletion
                based throughout the UK. With an average of 18 years of
                experience, our technicians use the latest ECU programming
                equipment and proprietary software to provide top-quality
                service.
              </em>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
              <em>
                Our primary service is Adblue removal, aimed at eliminating
                annoying warning lights and dashboard alerts, ensuring smooth
                operation of your vehicle. Additionally, we offer a
                comprehensive range of ECU services beyond Adblue deletion.
              </em>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How does Adblue Solution differ from others?
            </Accordion.Header>
            <Accordion.Body>
              <em>
                We stand out by using genuine specialized equipment and UK-based
                technology, ensuring an undetectable Adblue deletion at MOT
                stations. Our process typically requires no mechanical changes,
                offering a safe and reliable solution for your vehicle.
              </em>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Why choose Adblue Solution?</Accordion.Header>
            <Accordion.Body>
              <em>
                Choosing Adblue Solution guarantees a hassle-free experience.
                Our advanced software enables seamless Adblue system removal,
                saving you money, boosting power, and eliminating the
                inconveniences associated with Adblue refills.
              </em>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What are the drawbacks of Adblue?
            </Accordion.Header>
            <Accordion.Body>
              <em>
                While Adblue promises cleaner emissions, it comes with its
                challenges. Costing around £20 for a small bottle and causing
                reliability issues, it can be an inconvenience for vehicle
                owners. Moreover, finding stockists and dealing with spills can
                be additional headaches.
              </em>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Is Adblue deletion legal?</Accordion.Header>
            <Accordion.Body>
              <em>
                We advise our customers to prioritise compliance with emissions
                standards and seek professional advice before considering
                modifications to their vehicles. While we provide Adblue
                deletion services, it's essential to understand and adhere to
                legal regulations.
              </em>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default FaqAccordion;
