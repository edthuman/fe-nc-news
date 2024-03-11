import "./App.css";
import ArticlesPage from "./components/ArticlesPage/ArticlesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ArticlesPage />} />
                <Route path="/articles/:article_id" element={<SingleArticle />} />
            </Routes>
        </>
    );
}

export default App;
