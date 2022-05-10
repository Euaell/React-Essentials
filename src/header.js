import lion from "./lion.png";
function Header() {
    return ( 
        <nav>
            <div className="nav-wrapper inconsolata teal lighten-1">
                <a href="/" className="brand-logo center font-900">
                    <img height={40} alt="lion" src={lion} />
                    <span style={{marginTop: 0}}>Github Users</span>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/">Components</a></li>
                    <li><a href="/">JavaScript</a></li>
                </ul>
            </div>
        </nav>
     );
}

export default Header;