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
            <div className="col-12 col-sm-6 col-lg-4">
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
                <Center>
                  <SocialMediaIcons />
                </Center>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-12 col-lg py-sm-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title">About</h5>
                {/* Footer Menu*/}
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Corporate Sale</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Policy</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-12 col-lg py-sm-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title">Support</h5>
                {/* Footer Menu*/}
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Help &amp; Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-12 col-lg py-sm-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title">Contact</h5>
                {/* Footer Menu*/}
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Call Centre</a>
                    </li>
                    <li>
                      <a href="#">Email Us</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
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
