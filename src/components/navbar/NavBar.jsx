import "./navbar.css";

export default function NavBar(){
    return(
        <nav>
            <ul className="nav-menu">
                <h2>
                    <li>
                        <a href="/">Logo</a>
                    </li>
                </h2>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Peluches
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Lightstick
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Albumes
                    </a>
                </li>

                <span>🛒</span>
            </ul>
        </nav>
    )
};

