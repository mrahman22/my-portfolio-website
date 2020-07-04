import React from 'react'
import {Link} from '@reach/router'

function Nav() {
    return (
        <nav>
            <label className="logo">Mustabur Rahman</label>
            <ul>
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            <Link to={"/projects"}>
            <li>Projects</li>
            </Link>
            <Link to={"/contact"}>
            <li>Contact</li>
            </Link>
            </ul>
        </nav>
    )
}

export default Nav
