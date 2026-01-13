import { Link } from "react-router";
import logo from "../assets/react.svg";
function Navbar() {
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
        </nav>
    );
}

export default Navbar;