import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Center } from "@chakra-ui/react";

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer_area section_padding_130_0 mt-5">
        <div className="container">
          <div className="row">
            {/* Single Widget*/}
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Footer Logo*/}
                <Center>
                  <div className="footer-logo" />
                  <img
                    src="src/assets/LOGO WHITE NO BG.png"
                    alt="LOGO"
                    className="w-75 mt-3 mx-3 mb-4"
                  />
                </Center>
                {/* Copywrite Text*/}
                <Center>
                  <div className="copywrite-text mb-5 mt-3 text-center">
                    <p className="mb-0">
                      Designed and built by <i className="lni-heart mr-1" />
                      <a
                        className="ml-1"
                        href="https://wrapbootstrap.com/user/DesigningWorld"
                      >
                        Tech Minds Consulting
                      </a>
                    </p>
                  </div>
                </Center>
                {/* Footer Social Area*/}
                <Center className="pb-4">
                  <SocialMediaIcons />
                </Center>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-12 col-lg py-sm-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title text-center text-sm-left">
                  Quick Links
                </h5>
                {/* Footer Menu*/}
                <div className="footer_menu text-center text-sm-left">
                  <ul>
                    <li>
                      <a href="/about">Services</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-12 col-lg py-sm-4">
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
            <div className="col-12 col-sm-12 col-lg py-sm-4">
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
                      <a href="/about">Disclaimers</a>
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
