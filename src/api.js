import axios from "axios";

function getAllArticles() {
    return axios
        .get("https://northcoders-news-c5lb.onrender.com/api/articles")
        .then((response) => {
            return response.data.articles;
        });
}

function getSingleArticle(article_id) {
    return axios
        .get(
            `https://northcoders-news-c5lb.onrender.com/api/articles/${article_id}`
        )
        .then((response) => {
            return response.data.article;
        });
}

function getCommentsFromArticleID({ article_id }) {
    return axios
        .get(
            `https://northcoders-news-c5lb.onrender.com/api/articles/${article_id}/comments`
        )
        .then((response) => {
            return response.data.comments;
        });
}

function updateArticleVotes(article_id, voteIncrement) {
    const patchVoteObject = { inc_votes: voteIncrement };

    return axios.patch(
        `https://northcoders-news-c5lb.onrender.com/api/articles/${article_id}`,
        patchVoteObject
    );
}

export {
    getAllArticles,
    getSingleArticle,
    getCommentsFromArticleID,
    updateArticleVotes,
};
