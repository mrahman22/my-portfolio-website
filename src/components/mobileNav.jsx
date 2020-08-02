import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <ul>
        <Link to={"/"}>
          <FontAwesomeIcon className="twitter-icon" icon={faHome} />
        </Link>
        <Link to={"/projects"}>
          <FontAwesomeIcon className="github-icon" icon={faGithub} />
        </Link>
        <Link to={"/contacts"}>
          <FontAwesomeIcon className="linkedin-icon" icon={faAddressCard} />
        </Link>
      </ul>
    </nav>
  );
}

export default MobileNav;
