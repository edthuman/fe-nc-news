import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <h1>
            <Link to="/" id="header">
                NC News
            </Link>
        </h1>
    );
}

export default Header;
