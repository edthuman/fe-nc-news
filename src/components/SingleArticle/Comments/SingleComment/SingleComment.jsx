import "./SingleComment.css";

function SingleComment({ comment }) {
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
            <header>
                <p className="comment-author">{comment.author}</p>
                <p className="comment-time">{postedTime}</p>
                <p className="comment-date">{postedDate}</p>
            </header>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-votes">Votes: {comment.votes}</p>
        </div>
    );
}

export default SingleComment;
