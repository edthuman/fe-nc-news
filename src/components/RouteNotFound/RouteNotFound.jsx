import { Link } from "react-router-dom";
import "./RouteNotFound.css";

function RouteNotFound() {
    return (
        <div id="page-not-found">
            <p>We couldn't find the page you were looking for</p>
            <Link to="/">{`<<To front page`}</Link>
        </div>
    );
}

export default RouteNotFound;
