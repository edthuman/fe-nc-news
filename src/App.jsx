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
                        />
                    }
                />
                <Route
                    path="/all"
                    element={
                        <AllArticlesPage
                            selectedTopic={selectedTopic}
                            setSelectedTopic={setSelectedTopic}
                        />
                    }
                />
                <Route
                    path="/:topic"
                    element={
                        <TopicArticlesPage
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
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
