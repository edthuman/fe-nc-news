import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "../Loading/Loading";
import { getAllArticles } from "../../api";
import "./AllArticlesPage.css"
import TopicSelector from "./TopicSelector";

function AllArticlesPage({selectedTopic, setSelectedTopic}) {
    const [articles, setArticles] = useState([]);
    const [areArticlesLoading, setAreArticlesLoading] = useState(true)

    useEffect(() => {
        setAreArticlesLoading(true)
        getAllArticles().then((returnedArticles) => {
            setArticles(returnedArticles)
            setAreArticlesLoading(false)
        });
    }, []);

    return (areArticlesLoading ? 
        <Loading/> : (<>
            <h2>Showing all articles</h2>
            <TopicSelector selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </>)
        )
};

export default AllArticlesPage;
