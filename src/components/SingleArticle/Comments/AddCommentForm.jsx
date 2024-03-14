import { useState } from "react";
import { handleCommentPost } from "../single-article-click-handlers";
import "./AddCommentForm.css";

function AddCommentForm({ article_id, user, setComments, setIsAddCommentClicked }) {
    const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
    const [commentInput, setCommentInput] = useState("");
    const [isSubmitLoading, setIsSubmitLoading] = useState(false);
    const [isSubmissonError, setIsSubmissionError] = useState(false)

    return (
        <form
            onSubmit={(e) =>
                handleCommentPost(
                    e,
                    setIsCommentSubmitted,
                    setIsSubmitLoading,
                    setCommentInput,
                    article_id,
                    user,
                    commentInput,
                    setComments,
                    setIsAddCommentClicked,
                    setIsSubmissionError
                )
            }
            id="add-comment-form"
        >
            <label htmlFor="add-comment">Type your comment here:</label>
            <textarea
                id="add-comment-input"
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
            />
            {isCommentSubmitted && isSubmitLoading ? (
                <p>Please wait...</p>
            ) : isCommentSubmitted ? (
                <>
                    <button className="submit-comment-button">
                        Add comment
                    </button>
                    <p>Please enter a comment</p>
                </>
            ) : (
                <button className="submit-comment-button">Add comment</button>
            )}
            {isSubmissonError ? <p>Comment failed to post</p>: null}
        </form>
    );
}

export default AddCommentForm;
