import { updateArticleVotes } from "../../api";

function handleLikeClick(article_id, setVoteCount, setHasErrorOccurred) {
    setVoteCount((currVoteCount) => currVoteCount + 1);
    
    updateArticleVotes(article_id, 1)
    .then(() => {
        setHasErrorOccurred(false)
    })
    .catch((err) => {
        setVoteCount((currVoteCount) => currVoteCount -1)
        setHasErrorOccurred(true)
    });
}

function handleDislikeClick(article_id, setVoteCount, setHasErrorOccurred) {
    setVoteCount((currVoteCount) => currVoteCount - 1);

    updateArticleVotes(article_id, -1)
    .then(() => {
        setHasErrorOccurred(false)
    })
    .catch((err) => {
        setVoteCount((currVoteCount) => currVoteCount + 1)
        setHasErrorOccurred(true)
    })
}

export { handleLikeClick, handleDislikeClick }