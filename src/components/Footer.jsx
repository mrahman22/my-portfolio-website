import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faLinkedin)

function Footer() {
    return (
        <div className="footer-container">
        <footer className="footer">
            {/* <FontAwesomeIcon className="twitter-icon" icon={faTwitter}/> */}
            <a href="https://github.com/mrahman22">
            <FontAwesomeIcon className="github-icon" icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/mustabur-rahman-7460981aa/">
            <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
            </a>
        </footer>
        </div>
    )
}

export default Footer
