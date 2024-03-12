import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleArticle.css"
import Loading from "../Loading/Loading";
import CommentsList from "./CommentsList";
import { getSingleArticle } from "../../api";

function SingleArticle() {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isArticleLoading, setIsArticleLoading] = useState(true)

    useEffect(() => {
        getSingleArticle(article_id).then((returnedArticle) => {
            setArticle(returnedArticle);
            setIsArticleLoading(false)
        });
    }, []);

    return (isArticleLoading ? <Loading/> 
    : (<>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>{article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <h3>Comments ({article.comment_count})</h3>
            <CommentsList article_id={article_id}/>
        </>)
    );
}

export default SingleArticle;
