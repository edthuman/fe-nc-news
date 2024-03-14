import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "../Loading/Loading";
import { getTopicArticles } from "../../api";
import TopicSelector from "./TopicSelector";
import { useParams } from "react-router-dom";
import SortArticle from "./SortArticles";

function TopicArticlesPage({ selectedTopic, setSelectedTopic, selectedSortCriteria, setSelectedSortCriteria, selectedSortOrder, setSelectedSortOrder }) {
    const [articles, setArticles] = useState([]);
    const [areArticlesLoading, setAreArticlesLoading] = useState(true);
    const { topic } = useParams();

    useEffect(() => {
        setAreArticlesLoading(true);
        getTopicArticles(topic, selectedSortCriteria, selectedSortOrder).then((returnedArticles) => {
            setArticles(returnedArticles);
            setAreArticlesLoading(false);
        });
    }, [topic, selectedSortCriteria, selectedSortOrder]);

    return areArticlesLoading ? (
        <Loading />
    ) : (
        <>
            <h2>Showing all {topic} articles</h2>
            <TopicSelector selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
            <SortArticle selectedSortCriteria={selectedSortCriteria} setSelectedSortCriteria={setSelectedSortCriteria} selectedSortOrder={selectedSortOrder} setSelectedSortOrder={setSelectedSortOrder}/>
            {articles.map((article) => {
                return (
                    <ArticleCard key={article.article_id} article={article} />
                );
            })}
        </>
    );
}

export default TopicArticlesPage;
