import "./App.css";
import AllArticlesPage from "./components/ArticlesPage/AllArticlesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Login from "./components/Login/Login";
import TopicArticlesPage from "./components/ArticlesPage/TopicArticlesPage";
import { useState } from "react";
import NotFound from "./components/NotFound/NotFound";

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
                    path="/topic/:topic"
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
                <Route path="/login" element={<Login selectedTopic={selectedTopic}/>} />
                <Route
                    path="/articles/:article_id"
                    element={<SingleArticle selectedTopic={selectedTopic} />}
                />
                <Route
                    path="/*"
                    element={<NotFound selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>}
                />
            </Routes>
        </div>
    );
}

export default App;
