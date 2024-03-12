import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./SingleArticle.css"
import Loading from "../Loading/Loading";

function SingleArticle() {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isArticleLoading, setIsArticleLoading] = useState(true)

    function getArticleInformation() {
        return axios
            .get(
                `https://northcoders-news-c5lb.onrender.com/api/articles/${article_id}`
            )
            .then((response) => {
                return response.data.article;
            });
    }

    useEffect(() => {
        getArticleInformation().then((returnedArticle) => {
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
            <p>Comments: {article.comment_count}</p>

        </>)
    );
}

export default SingleArticle;
