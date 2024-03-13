import { postComment, updateArticleVotes } from "../../api";

function handleLikeClick(article_id, setVoteCount, setHasErrorOccurred) {
    setVoteCount((currVoteCount) => currVoteCount + 1);

    updateArticleVotes(article_id, 1)
        .then(() => {
            setHasErrorOccurred(false);
        })
        .catch((err) => {
            setVoteCount((currVoteCount) => currVoteCount - 1);
            setHasErrorOccurred(true);
        });
}

function handleDislikeClick(article_id, setVoteCount, setHasErrorOccurred) {
    setVoteCount((currVoteCount) => currVoteCount - 1);

    updateArticleVotes(article_id, -1)
        .then(() => {
            setHasErrorOccurred(false);
        })
        .catch((err) => {
            setVoteCount((currVoteCount) => currVoteCount + 1);
            setHasErrorOccurred(true);
        });
}

function handleAddCommentClick(setIsAddCommentClicked) {
    setIsAddCommentClicked(true);
}

function handleCommentPost(
    e,
    setIsCommentSubmitted,
    setIsSubmitLoading,
    setCommentInput,
    article_id,
    username,
    comment,
    setComments,
    setIsAddCommentClicked,
    setIsSubmissionError
) {
    e.preventDefault();
    setIsSubmissionError(false);
    setIsCommentSubmitted(true);
    if (comment.length) {
        setIsSubmitLoading(true);
        postComment(article_id, username, comment)
            .then((response) => {
                setComments((currComments) => {
                    return [response, ...currComments];
                });
                setIsSubmitLoading(false);
                setCommentInput("");
                setIsCommentSubmitted(false);
                setIsAddCommentClicked(false);
                setIsSubmissionError(false);
            })
            .catch((err) => {
                setIsSubmissionError(true);
                setIsSubmitLoading(false);
                setIsCommentSubmitted(false);
            });
    }
}

export {
    handleLikeClick,
    handleDislikeClick,
    handleAddCommentClick,
    handleCommentPost,
};
