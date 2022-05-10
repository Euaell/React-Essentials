function Header() {
    return ( 
        <nav>
            <div className="nav-wrapper inconsolata teal lighten-1">
                <a href="/" className="brand-logo center font-900">Github Users</a>
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