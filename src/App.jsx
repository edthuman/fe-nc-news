import "./App.css";
import AllArticlesPage from "./components/ArticlesPage/AllArticlesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Login from "./components/Login/Login";
import TopicArticlesPage from "./components/ArticlesPage/TopicArticlesPage";
import { useState } from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState("all");
    const [selectedSortCriteria, setSelectedSortCriteria] = useState("created_at")
    const [selectedSortOrder, setSelectedSortOrder] = useState("DESC")

    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <AllArticlesPage
                            selectedTopic={selectedTopic}
                            setSelectedTopic={setSelectedTopic}
                            selectedSortCriteria={selectedSortCriteria}
                            setSelectedSortCriteria={setSelectedSortCriteria}
                            selectedSortOrder={selectedSortOrder} 
                            setSelectedSortOrder={setSelectedSortOrder}
                        />
                    }
                />
                <Route
                    path="/all"
                    element={
                        <AllArticlesPage
                            selectedTopic={selectedTopic}
                            setSelectedTopic={setSelectedTopic}
                            selectedSortCriteria={selectedSortCriteria}
                            setSelectedSortCriteria={setSelectedSortCriteria}
                            selectedSortOrder={selectedSortOrder} 
                            setSelectedSortOrder={setSelectedSortOrder}
                        />
                    }
                />
                <Route
                    path="/:topic"
                    element={
                        <TopicArticlesPage
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                        selectedSortCriteria={selectedSortCriteria}
                        setSelectedSortCriteria={setSelectedSortCriteria}
                        selectedSortOrder={selectedSortOrder} 
                        setSelectedSortOrder={setSelectedSortOrder}
                        />
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/articles/:article_id"
                    element={<SingleArticle selectedTopic={selectedTopic} />}
                />
            </Routes>
        </div>
    );
}

export default App;
