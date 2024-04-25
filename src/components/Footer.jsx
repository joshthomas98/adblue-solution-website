import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <>
      <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            {/* Single Widget*/}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Footer Logo*/}
                <div className="footer-logo" />
                <p>
                  Appland is completely creative, lightweight, clean app landing
                  page.
                </p>
                {/* Copywrite Text*/}
                <div className="copywrite-text mb-5">
                  <p className="mb-0">
                    Made with <i className="lni-heart mr-1" />
                    by
                    <a
                      className="ml-1"
                      href="https://wrapbootstrap.com/user/DesigningWorld"
                    >
                      Designing World
                    </a>
                  </p>
                </div>
                {/* Footer Social Area*/}
                <SocialMediaIcons />
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-6 col-lg">
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
            <div className="col-12 col-sm-6 col-lg">
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
            <div className="col-12 col-sm-6 col-lg">
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
      </footer>
    </>
  );
};

export default Footer;
