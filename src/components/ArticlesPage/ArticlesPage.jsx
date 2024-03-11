import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function ArticlesPage() {
    const [articles, setArticles] = useState([]);

    function getAllArticles() {
        return axios
            .get("https://northcoders-news-c5lb.onrender.com/api/articles")
            .then((response) => {
                return response.data.articles;
            });
    };

    useEffect(() => {
        getAllArticles().then((returnedArticles) => {
            setArticles(returnedArticles);
        });
    }, []);

    return (
        <>
            <h2>Showing all articles</h2>
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </>
    );
};

export default ArticlesPage;
