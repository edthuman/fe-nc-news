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
                <div className="article-card-details">
                    <p className="article-topic">{article.topic[0].toUpperCase() + article.topic.slice(1)}</p>
                    <p className="article-votes">Votes: {article.votes}</p>
                    <p className="article-author">By {article.author}</p>
                    <p className="article-time">{postedTime}</p>
                    <p className="article-date">{postedDate}</p>
                </div>
                <img className="article-card-img" src={article.article_img_url} />
            </article>
        </Link>
    );
}

export default ArticleCard;
