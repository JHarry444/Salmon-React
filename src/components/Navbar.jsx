import { Link } from "react-router";
import logo from "../assets/react.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/context";
function Navbar() {

    const {theme, toggle} = useContext(ThemeContext);
    return (
        <nav style={{
            "display": "flex",
            "justifyContent": "space-between"
        }}>
            <Link to="/">
                <img src={logo} alt="react logo" />
            </Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External</Link>
            <Link to="/events">Events</Link>
            <Link to="/state">State</Link>
            <Link to="/effect">Effect</Link>
            <button className={theme} onClick={toggle}>TOGGLE THEME</button>
        </nav>
    );
}

export default Navbar;