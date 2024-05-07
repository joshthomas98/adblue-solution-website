import React from "react";

const About = () => {
  return (
    <>
      <section id="learn" className="p-5">
        <h1 className="text-center pb-3">About Us</h1>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src="/assets/Can man  habd on hip and thumbs up good hand black background.png"
                className="img-fluid"
                alt=""
              />
            </div>

            {/*- Section 1 */}
            <div className="col-md pt-sm-4 p-lg-5">
              <h2>Who We Are</h2>
              <p className="lead">
                Adblue Solution are a group of Adblue delete specialists based
                throughout the UK.
              </p>
              <p>
                We only use technicians with a high level of experience and
                expertise with an average of 18 years in the business, and we
                only use the latest in ECU programming equipment (NO CHINESE
                CLONES) and OUR software which is fully supported by the
                software developers should we ever need it.
              </p>
              <p>
                We will do a full vehicle diagnostic scan to check all of the
                cars software and modules so we have a full understanding of
                what we are dealing with and know exactly what the issue is
                before we carry out any work. So as a customer you can be rest
                assured that you are in safe hands at all times.
              </p>
              <p>
                Our goal is to keep you on or get you back on the road without
                any Adblue Issues, so our customers are always our top priority
                and we won’t keep you waiting for days to get a confirmed
                booking.
              </p>
              <p>
                We offer a complete ECU service, not just Adblue delete. For
                more information please see our services page.
              </p>
              <a href="/services" className="btn btn-light mt-3">
                <i
                  className="fa fa-chevron-right"
                  style={{ marginRight: "10px" }}
                ></i>
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*- Section 2 */}
      <section id="learn" className="p-5 bg-dark text-dark">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md py-sm-4 px-sm-4 p-lg-5 order-md-last">
              <img
                src="/assets/laptop and flex on bmw engine.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md pt-sm-0 pb-sm-4 px-sm-5 p-lg-5">
              <h2 className="pb-3">AdBlue Solution</h2>
              <p>
                At Adblue Solution, with over 15 years in the Engine ECU
                Reprogramming business, we offer an AdBlue removal service that
                is second to none, for both you and your vehicle. The best part?
                Say goodbye to all those annoying warning lights and dashboard
                alerts that disrupt your driving experience. With an AdBlue
                Solution delete, your car or van runs smoothly without constant
                faults nagging at you.
              </p>
              <p>
                Our Adblue Solution delete is undetectable at the MOT STATION.
              </p>
              <p>
                But here's the thing: not all removals are created equal. That's
                where Adblue Solution shines. We use only genuine specialized
                equipment and UK-based technology with in-house programmers to
                ensure a safe and risk-free process for your vehicle. No
                mechanical changes are usually necessary, although some sensors
                or modules may need disconnection.
              </p>
              <p>
                So why settle for anything less when you can trust the experts
                at Adblue Solution to get the job done?
              </p>
              <p>
                Using our advanced software, we remove and disable the AdBlue
                system, ensuring your vehicle operates normally without ever
                needing an AdBlue refill again. With AdBlue Solution, you can
                save money, boost power, and enjoy your vehicle without the
                usual AdBlue inconveniences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*- Section 3 */}
      <section id="learn" className="py-sm-4 text-dark">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md pb-sm-3 px-sm-4 p-lg-5">
              <img
                src="/assets/CAT CONVERTER.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md py-sm-0 px-sm-4 p-lg-5">
              <h2 className="pb-3">More AdBlue Facts</h2>
              <p>
                AdBlue – the double-edged sword of emission reduction! Sure, it
                promises cleaner skies, but at what cost? Picture this: you're
                forking over around £20 for a measly 2.5-litre bottle, only to
                watch your vehicle gulp down 3 to 4 litres every 1,000 miles.
                And let's not even get started on the reliability issues – with
                parts ranging from a mere £100 to a staggering £4,500, and some
                on back order, your wheels might be stuck off-road longer than
                you'd like.
              </p>
              <p>
                But wait, there's more! The inconvenience factor kicks in full
                force when you're on the road, desperately hunting for a
                stockist to top up your AdBlue reserves and the mess it makes
                with those white crystals getting everywhere if you spill it
                anywhere on your vehicle. And trust me, when that AdBlue counter
                hits zero, your vehicle's not just playing hard to get – it flat
                out refuses to start! So, while AdBlue might be the
                eco-warrior's weapon of choice, it's a battlefield littered with
                expenses, inconveniences, and unreliable twists and turns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*- Section 4 */}
      <section id="learn" className="p-5 bg-dark text-center">
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
      </section>
    </>
  );
};

export default About;
