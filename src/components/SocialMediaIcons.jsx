import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  const iconSize = "2x"; // Adjust the size as needed

  return (
    <div className="footer_profile">
      <ul className="social-icons">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100076412066378"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <FontAwesomeIcon icon={faPinterest} size={iconSize} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
