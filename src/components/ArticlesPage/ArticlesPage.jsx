import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "../Loading/Loading";
import { getAllArticles } from "../../api";
import "./ArticlesPage.css"

function ArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [areArticlesLoading, setAreArticlesLoading] = useState(true)

    useEffect(() => {
        getAllArticles().then((returnedArticles) => {
            setArticles(returnedArticles)
            setAreArticlesLoading(false)
        });
    }, []);

    return (areArticlesLoading ? 
        <Loading/> : (<>
            <h2>Showing all articles</h2>
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </>)
        )
};

export default ArticlesPage;
