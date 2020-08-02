import React from 'react'
import {Link} from '@reach/router'
import MobileNav from './mobileNav'

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
            <Link to={"/contacts"}>
            <li>Contact</li>
            </Link>
            </ul>
            <MobileNav />
        </nav>
    )
}

export default Nav
