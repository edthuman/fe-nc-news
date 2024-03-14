import TopicSelector from "./TopicSelector";
import "./TopicNotFound.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

function TopicNotFound({ selectedTopic, setSelectedTopic }) {
    const topic = useParams().topic.toLowerCase()
    const navigate = useNavigate()
    
    useEffect(()=> {
        if (topic === "all") {
            navigate("/")
        }
    }, [])
    
    return (topic === "all" ? <Loading/> :
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
