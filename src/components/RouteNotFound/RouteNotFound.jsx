import { Link } from "react-router-dom";
import "./RouteNotFound.css";

function RouteNotFound() {
    return (
        <div id="page-not-found">
            <h2>We couldn't find the page you were looking for</h2>
            <Link to="/">{`<<To front page`}</Link>
        </div>
    );
}

export default RouteNotFound;
