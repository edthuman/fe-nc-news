import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "../Loading/Loading";
import { getAllArticles } from "../../api";
import "./AllArticlesPage.css";
import TopicSelector from "./TopicSelector";
import SortArticle from "./SortArticles";

function AllArticlesPage({
    selectedTopic,
    setSelectedTopic,
    selectedSortCriteria,
    setSelectedSortCriteria,
    selectedSortOrder,
    setSelectedSortOrder,
}) {
    const [articles, setArticles] = useState([]);
    const [areArticlesLoading, setAreArticlesLoading] = useState(true);

    useEffect(() => {
        setAreArticlesLoading(true);
        getAllArticles(selectedSortCriteria, selectedSortOrder).then(
            (returnedArticles) => {
                setArticles(returnedArticles);
                setAreArticlesLoading(false);
            }
        );
    }, [selectedSortCriteria, selectedSortOrder]);

    return areArticlesLoading ? (
        <Loading />
    ) : (
        <>
            <h2>Showing all articles</h2>
            <TopicSelector
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
            />
            <SortArticle
                selectedSortCriteria={selectedSortCriteria}
                setSelectedSortCriteria={setSelectedSortCriteria}
                selectedSortOrder={selectedSortOrder}
                setSelectedSortOrder={setSelectedSortOrder}
            />
            {articles.map((article) => {
                return (
                    <ArticleCard key={article.article_id} article={article} />
                );
            })}
        </>
    );
}

export default AllArticlesPage;
