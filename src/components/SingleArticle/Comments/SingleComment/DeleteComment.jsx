import { useState } from "react"
import { handleDeleteComment } from "../../single-article-click-handlers"

function DeleteComment({comment_id, setIsCommentDeleted}) {
    const [isDeleteLoading, setIsDeleteLoading] =useState(false)
    const [isErrorDeletingComment, setIsErrorDeletingComment] = useState(false)

    return <>
        {isDeleteLoading ? <p>Please wait</p> : (
        <button className ="delete-comment-button" onClick={() => handleDeleteComment(comment_id, setIsDeleteLoading, setIsCommentDeleted, setIsErrorDeletingComment)}>Delete comment</button>
        )}
        {isErrorDeletingComment ? <p>Comment deletion unsuccessful</p> : null}
        </>
}

export default DeleteComment