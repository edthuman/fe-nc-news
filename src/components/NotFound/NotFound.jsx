import { Link } from "react-router-dom";
import TopicSelector from "../ArticlesPage/TopicSelector";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import "./NotFound.css";

function NotFound({ selectedTopic, setSelectedTopic }) {
    const navigate = useNavigate();
    const url = useParams();
    const isTopicURL =
        url.topic !== undefined ||
        url["*"] === "topic/" ||
        url["*"] === "topic";
    const isArticleURL =
        url.article_id !== undefined ||
        url["*"] === "articles/" ||
        url["*"] === "articles";

    useEffect(() => {
        if (url.topic === "all" || url.topic === "All") {
            navigate("/");
        }
    }, []);

    return (
        <div id="page-not-found">
            {url.topic === "all" ? (
                <Loading />
            ) : isTopicURL ? (
                <div id="topic-not-found">
                    <h2>Topic not found</h2>
                    <p>
                        We don't seem to have any articles on that yet, please
                        choose another topic.
                    </p>
                    <TopicSelector
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                    />
                </div>
            ) : isArticleURL ? (
                <>
                    <h2>We couldn't find the article you were looking for</h2>
                    <Link to="/">{`<<To front page`}</Link>
                </>
            ) : (
                <>
                    <h2>We couldn't find the page you were looking for</h2>
                    <Link to="/">{`<<To front page`}</Link>
                </>
            )}
        </div>
    );
}

export default NotFound;
