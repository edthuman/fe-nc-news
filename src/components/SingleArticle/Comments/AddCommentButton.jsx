import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/User";
import { handleAddCommentClick } from "../article-click-handlers";
import AddCommentForm from "./AddCommentForm";
import "./AddCommentButton.css";

function AddCommentButton({ article_id, setComments }) {
    const { user, setUser } = useContext(UserContext);
    const [isAddCommentClicked, setIsAddCommentClicked] = useState(false);

    return user === "guest" ? (
        <p>Log in to add a comment</p>
    ) : isAddCommentClicked ? (
        <AddCommentForm
            article_id={article_id}
            user={user}
            setComments={setComments}
            setIsAddCommentClicked={setIsAddCommentClicked}
        />
    ) : (
        <button
            id="add-comment-button"
            onClick={() => handleAddCommentClick(setIsAddCommentClicked)}
        >
            Add Comment
        </button>
    );
}

export default AddCommentButton;
