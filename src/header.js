import lion from "./lion.png";
import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Header() {
   
    return ( 
        <nav>
            <div className="nav-wrapper inconsolata teal lighten-1">
                <a href="/" className="brand-logo center font-900">
                    <img height={40} alt="lion" src={lion} />
                    <span >Github Users</span>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li className={useLocation().pathname === "/"? "active" : ""}><Link to="/">Home</Link></li>
                    <li className={useLocation().pathname === "/events"? "active" : ""}><Link to="/events">Events</Link></li>
                    <li className={useLocation().pathname === "/about"? "active" : ""}><Link to="/about">about</Link></li>
                    <li className={useLocation().pathname === "/contact"? "active" : ""}><Link to="/contact">Contact</Link> </li> 
                </ul>
            </div>
        </nav>
     );
}

export default Header;