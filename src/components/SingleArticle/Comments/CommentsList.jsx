import { useEffect, useState } from "react";
import { getCommentsFromArticleID } from "../../../api";
import SingleComment from "./SingleComment/SingleComment";
import "./CommentsList.css";
import Loading from "../../Loading/Loading";
import AddCommentButton from "./AddCommentButton";

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);
    const [areCommentsLoading, setAreCommentsLoading] = useState(true);

    useEffect(() => {
        getCommentsFromArticleID(article_id).then((returnedComments) => {
            setComments(returnedComments);
            setAreCommentsLoading(false);
        });
    }, []);

    return (
        <>
            <AddCommentButton
                article_id={article_id}
                setComments={setComments}
            />
            {areCommentsLoading ? (
                <Loading />
            ) : (
                <section id="comment-list">
                    {comments.map((comment) => {
                        return (
                            <SingleComment
                                key={comment.comment_id}
                                comment={comment}
                            />
                        );
                    })}
                </section>
            )}
        </>
    );
}

export default CommentsList;
