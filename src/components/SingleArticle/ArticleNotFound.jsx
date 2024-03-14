import { Link } from "react-router-dom"
import "./ArticleNotFound.css"

function ArticleNotFound() {
    return <div id="article-not-found">
    <h2>We couldn't find the article you were looking for</h2>
    <Link to="/">{`<<To front page`}</Link>
</div>
}

export default ArticleNotFound