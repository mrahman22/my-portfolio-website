import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function MobileNav() {
  return (
      <nav className="mobile-nav">
        <ul>
          <Link to={"/"}>
            <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
          </Link>
          <Link to={"/projects"}>
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
          </Link>
          <Link to={"/contact"}>
            <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
          </Link>
        </ul>
      </nav>
  );
}

export default MobileNav;
