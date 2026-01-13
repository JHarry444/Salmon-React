import { Link } from "react-router";
import logo from "../assets/react.svg";
function Navbar() {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="react logo" />
            </Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External</Link>
        </nav>
    );
}

export default Navbar;