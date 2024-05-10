import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  const iconSize = "2x"; // Adjust the size as needed

  return (
    <div className="footer_profile">
      <ul className="social-icons">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} size={iconSize} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} size={iconSize} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} size={iconSize} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
