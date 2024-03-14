import TopicSelector from "./TopicSelector";
import "./TopicNotFound.css";

function TopicNotFound({ selectedTopic, setSelectedTopic }) {
    return (
        <div id="topic-not-found">
            <h2>Topic not found</h2>
            <p>We don't seem to have any articles on that yet, please choose another topic.</p>
            <TopicSelector
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
            />
        </div>
    );
}

export default TopicNotFound;
