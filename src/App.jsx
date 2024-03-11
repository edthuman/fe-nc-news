import "./App.css";
import ArticlesPage from "./components/ArticlesPage/ArticlesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ArticlesPage />} />
            </Routes>
        </>
    );
}

export default App;
