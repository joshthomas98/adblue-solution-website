import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Center } from "@chakra-ui/react";

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            {/* Single Widget*/}
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Footer Logo*/}
                <Center>
                  <div className="footer-logo" />
                  <img
                    src="/assets/LOGO WHITE NO BG.png"
                    alt="LOGO"
                    className="w-75 mx-3 mb-4"
                  />
                </Center>
                {/* Copywrite Text*/}
                <Center>
                  <div className="copywrite-text mb-5 mt-3 text-center">
                    <p className="mb-0">
                      Designed and built by <i className="lni-heart mr-1" />
                      <a className="ml-1" href="http://acorn.digital/">
                        Tech Minds Consulting
                      </a>
                    </p>
                  </div>
                </Center>
                {/* Footer Social Area*/}
                <Center className="pb-5 pb-sm-4 pb-md-5">
                  <SocialMediaIcons />
                </Center>
              </div>
            </div>
            {/* Single Widget*/}
            <div
              className="col-12 col-sm-12 col-lg"
              style={{ paddingRight: "50px" }}
            >
              <div className="single-footer-widget section_padding_0_130 pt-lg-0">
                {/* Widget Title*/}
                <h5 className="widget-title text-center text-sm-left">
                  Quick Links
                </h5>
                {/* Footer Menu*/}
                <div className="footer_menu text-center text-sm-left">
                  <ul>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="reviewslist">Reviews</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div
              className="col-12 col-sm-12 col-lg pt-4 pt-sm-3 pt-md-5 pt-lg-0"
              style={{ paddingRight: "50px" }}
            >
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title text-center text-sm-left">
                  Support
                </h5>
                {/* Footer Menu*/}
                <div className="footer_menu text-center text-sm-left">
                  <ul>
                    <li>
                      <a href="/faqs">FAQs</a>
                    </li>
                    <li>
                      <a href="/contact">Help &amp; Support</a>
                    </li>
                    <li>
                      <a href="/contact">Got a Question?</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div
              className="col-12 col-sm-12 col-lg pt-4 pt-sm-5 pt-md-5 pt-lg-0"
              style={{ paddingRight: "50px" }}
            >
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title text-center text-sm-left">Legal</h5>
                {/* Footer Menu*/}
                <div className="footer_menu text-center text-sm-left">
                  <ul>
                    <li>
                      <a href="/termsandconditions">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/privacypolicy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/disclaimer">Disclaimers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center mt-4">
                &copy; {currentYear} AdBlue Solution. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
