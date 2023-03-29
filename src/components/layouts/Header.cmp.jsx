import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="log-container"></div>
            <nav>
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"my-work"}>My Work</Link>
                    <Link to={"contact"}>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;