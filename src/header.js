import lion from "./lion.png";
import React from 'react';
// import $ from 'jquery'

function Header() {

    // doesn't work
    // $('ul.left li').on('click', function(){
    //     var clicked = $(this);
    //     console.log("clicked")
    //     $('ul.left li').each(function(){
    //         if($(this).hasClass('active')){
    //             $(this).removeClass('active');
    //         }
    //     });
    //     clicked.addClass('active');
    // })
    
    return ( 
        <nav>
            <div className="nav-wrapper inconsolata teal lighten-1">
                <a href="/" className="brand-logo center font-900">
                    <img height={40} alt="lion" src={lion} />
                    <span >Github Users</span>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/About">about</a></li>
                    <li><a href="/contact">Contact</a> </li> 
                </ul>
            </div>
        </nav>
     );
}

export default Header;