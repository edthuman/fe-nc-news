import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { handleLogOut } from "../Login/user-click-handler";

function Header() {
    const { user, setUser } = useContext(UserContext);

    return (
        <header id="header">
            <h1>
                <Link to="/">NC News</Link>
            </h1>
            {user === "guest" ? (
                <Link to="/login" id="login">
                    Log In
                </Link>
            ) : (
                <div id="log-out">
                    <p>{user}</p>
                    <button onClick={() => handleLogOut(setUser)}>Log Out</button>
                </div>
            )}
        </header>
    );
}

export default Header;
