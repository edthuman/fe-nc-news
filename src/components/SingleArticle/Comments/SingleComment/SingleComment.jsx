import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/User";
import "./SingleComment.css";
import DeleteComment from "./DeleteComment";

function SingleComment({ comment }) {
    const {user, setUser} = useContext(UserContext)
    const [isCommentDeleted, setIsCommentDeleted] = useState(false)

    const { created_at } = comment;
    const postedDate =
        created_at.slice(8, 10) +
        "/" +
        created_at.slice(5, 7) +
        "/" +
        created_at.slice(0, 4);
    const postedTime = created_at.slice(11, 16);

    return (
        <div className="comment">
            {isCommentDeleted ? <p className="delete-successful">Comment deleted</p> : (<>
            <header>
                <p className="comment-author">{comment.author}</p>
                <p className="comment-time">{postedTime}</p>
                <p className="comment-date">{postedDate}</p>
            </header>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-votes">Votes: {comment.votes}</p>
            {user === comment.author ? <DeleteComment delete-comment comment_id={comment.comment_id} setIsCommentDeleted={setIsCommentDeleted}/> : null}
            </>)}
        </div>
    );
}

export default SingleComment;
