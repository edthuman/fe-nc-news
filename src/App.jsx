import "./App.css";
import ArticlesPage from "./components/ArticlesPage/ArticlesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Login from "./components/Login/Login";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ArticlesPage />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/articles/:article_id" element={<SingleArticle />} />
            </Routes>
        </div>
    );
}

export default App;
