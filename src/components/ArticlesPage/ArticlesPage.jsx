import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "../Loading/Loading";

function ArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [areArticlesLoading, setAreArticlesLoading] = useState(true)

    function getAllArticles() {
        return axios
            .get("https://northcoders-news-c5lb.onrender.com/api/articles")
            .then((response) => {
                return response.data.articles;
            });
    };

    useEffect(() => {
        getAllArticles().then((returnedArticles) => {
            setArticles(returnedArticles)
            setAreArticlesLoading(false)
        });
    }, []);

    return (areArticlesLoading ? 
        <Loading/> : <>
            <h2>Showing all articles</h2>
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
            </>)
};

export default ArticlesPage;
