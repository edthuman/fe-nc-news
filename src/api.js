import axios from "axios";

function getAllArticles() {
    return axios
        .get("https://northcoders-news-c5lb.onrender.com/api/articles")
        .then((response) => {
            return response.data.articles;
        });
}

function getTopicArticles(topic) {
    return axios
    .get(`https://northcoders-news-c5lb.onrender.com/api/articles?topic=${topic}`)
    .then((response) => {
        return response.data.articles;
    });
}

function getAllTopics() {
    return axios
        .get("https://northcoders-news-c5lb.onrender.com/api/topics")
        .then((response) => {
            return response.data.topics;
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

function getCommentsFromArticleID(article_id) {
    return axios
        .get(
            `https://northcoders-news-c5lb.onrender.com/api/articles/${article_id}/comments?limit=40`
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

function getAllUsers() {
    return axios
        .get("https://northcoders-news-c5lb.onrender.com/api/users")
        .then((response) => {
            return response.data.users;
        });
}

function postComment(article_id, username, comment) {
    const commentObject = {
        username,
        body: comment,
    };

    return axios
        .post(
            `https://northcoders-news-c5lb.onrender.com/api/articles/${article_id}/comments`,
            commentObject
        )
        .then((response) => {
            return response.data.comment;
        });
}

function deleteCommentByID(comment_id) {
    return axios.delete(
        `https://northcoders-news-c5lb.onrender.com/api/comments/${comment_id}`
    );
}

export {
    getAllArticles,
    getSingleArticle,
    getCommentsFromArticleID,
    updateArticleVotes,
    getAllUsers,
    postComment,
    deleteCommentByID,
    getAllTopics,
    getTopicArticles,
};
