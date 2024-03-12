import "./ArticleCard.css";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
    const { created_at } = article;
    const postedDate =
        created_at.slice(8, 10) +
        "/" +
        created_at.slice(5, 7) +
        "/" +
        created_at.slice(0, 4);
    const postedTime = created_at.slice(11, 16);

    return (
        <Link to={`/articles/${article.article_id}`}>
            <article>
                <h3>{article.title}</h3>
                <p>Topic: {article.topic}</p>
                <p>Votes: {article.votes}</p>
                <p>Posted by: {article.author}</p>
                <p>
                    Posted {postedTime} on {postedDate}
                </p>
                <img src={article.article_img_url} />
            </article>
        </Link>
    );
}

export default ArticleCard;
