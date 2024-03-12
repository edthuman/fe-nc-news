import { useEffect, useState } from "react";
import { getCommentsFromArticleID } from "../../api";
import SingleComment from "./SingleComment";
import "./CommentsList.css"
import Loading from "../Loading/Loading";

function CommentsList(article_id) {
    const [comments, setComments] = useState([]);
    const [areCommentsLoading, setAreCommentsLoading] = useState(true)

    useEffect(() => {
        getCommentsFromArticleID(article_id).then((returnedComments) => {
            setComments(returnedComments);
            setAreCommentsLoading(false)
        });
    }, []);

    return (areCommentsLoading ? <Loading/> :
        (<section id="comment-list">
            {comments.map((comment) => {
                return (
                    <SingleComment key={comment.comment_id} comment={comment} />
                );
            })}
        </section>)
    );
}

export default CommentsList;
