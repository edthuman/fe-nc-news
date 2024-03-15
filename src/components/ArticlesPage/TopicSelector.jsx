import { useEffect, useState } from "react";
import { getAllTopics } from "../../api";
import { useNavigate } from "react-router-dom";
import { handleTopicSelection } from "./articles-click-handlers";

function TopicSelector({ selectedTopic, setSelectedTopic }) {
    const [topics, setTopics] = useState([]);
    const [hasTopicUpdated, setHasTopicUpdated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (hasTopicUpdated) {
            navigate(`/topic/${selectedTopic.toLowerCase()}`);
        }

        getAllTopics().then((returnedTopics) => {
            setTopics(returnedTopics);
            setHasTopicUpdated(false);
        });
    }, [selectedTopic]);

    return (
        <form>
            <label htmlFor="topic-selector">Display articles from: </label>
            <select
                id="topic-selector"
                onClick={(e) =>
                    handleTopicSelection(
                        e,
                        setSelectedTopic,
                        setHasTopicUpdated
                    )
                }
                selected={selectedTopic}
            >
                <option>All</option>
                {topics.map((topic) => {
                    return (
                        <option key={topic.slug}>
                            {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
                        </option>
                    );
                })}
            </select>
        </form>
    );
}

export default TopicSelector;
