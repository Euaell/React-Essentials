function Header() {
    return ( 
        <nav>
            <div class="nav-wrapper">
                <a href="/" class="brand-logo center">Github Users</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="/">Sass</a></li>
                    <li><a href="/">Components</a></li>
                    <li><a href="/">JavaScript</a></li>
                </ul>
            </div>
        </nav>
     );
}

export default Header;