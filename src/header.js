import lion from "./lion.png";
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
   
    return ( 
        <nav>
            <div className="nav-wrapper inconsolata teal lighten-1">
                <a href="/" className="brand-logo center font-900">
                    <img height={40} alt="lion" src={lion} />
                    <span >Github Users</span>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/About">about</Link></li>
                    <li><Link to="/contact">Contact</Link> </li> 
                </ul>
            </div>
        </nav>
     );
}

export default Header;