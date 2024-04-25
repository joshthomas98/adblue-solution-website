import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  return (
    <>
      <div className="footer_profile">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100076412066378"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialMediaIcons;
