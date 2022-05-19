function Nav(props) {
    return ( 
        <nav>
            <div className="nav-wrapper indigo darken-2">
                <a href="/" className="brand-logo nerd-logo">N.E.R.D</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Nav;