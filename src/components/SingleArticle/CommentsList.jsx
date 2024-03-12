import { useEffect, useState } from "react";
import { getCommentsFromArticleID } from "../../api";
import SingleComment from "./SingleComment";
import "./CommentsList.css"

function CommentsList(article_id) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsFromArticleID(article_id).then((returnedComments) => {
            setComments(returnedComments);
        });
    }, []);

    return (
        <section id="comment-list">
            {comments.map((comment) => {
                console.log(comment);
                return (
                    <SingleComment key={comment.comment_id} comment={comment} />
                );
            })}
        </section>
    );
}

export default CommentsList;
