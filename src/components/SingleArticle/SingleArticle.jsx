import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleArticle.css";
import Loading from "../Loading/Loading";
import CommentsList from "./Comments/CommentsList";
import { getSingleArticle } from "../../api";
import VoteArticle from "./VoteArticle";

function SingleArticle() {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const postedDateTime = article.created_at;

    useEffect(() => {
        getSingleArticle(article_id).then((returnedArticle) => {
            setArticle(returnedArticle);
            setIsArticleLoading(false);
        });
    }, []);

    return isArticleLoading ? (
        <>
            <Link to="/" className="back-link">
                {"<<Back to all articles"}
            </Link>
            <Loading />
        </>
    ) : (
        <>
            <Link to="/" className="back-link">
                {"<<Back to all articles"}
            </Link>
            <h2>{article.title}</h2>
            <div id="single-article-details">
                <p className="article-topic">
                    {article.topic[0].toUpperCase() + article.topic.slice(1)}
                </p>
                <p className="article-author">By {article.author}</p>
                <p className="article-date">
                    {postedDateTime.slice(8, 10) +
                        "/" +
                        postedDateTime.slice(5, 7) +
                        "/" +
                        postedDateTime.slice(0, 4)}
                </p>
                <p className="article-time">{postedDateTime.slice(11, 16)}</p>
            </div>
            <VoteArticle article_id={article_id} votes={article.votes}/>
            <img src={article.article_img_url} />
            <p>{article.body}</p>
            <h3>Comments ({article.comment_count})</h3>
            <CommentsList article_id={article_id} />
        </>
    );
}

export default SingleArticle;
