import EditCommentForm from "./EditCommentForm.js";
import { useState } from 'react';

function Comment({ comment, currentUser, onEditComment, onDeleteComment, wrapCommentSetterFunction, paintingComments }) {
    const [ viewingEditForm, setViewingEditForm ] = useState(false)

    const { content, user } = comment

    function handleEditComment() {
        setViewingEditForm(true)
    }

    function viewingEditFormSetterFunction(value) {
        setViewingEditForm(value)
    }

    // handles deleting comment
    function handleDeleteComment() {
        fetch(`/comments/${comment.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            onDeleteComment(comment)
            const updatedComments = paintingComments.filter(oneComment => {
                return oneComment.id !== comment.id
            })
            wrapCommentSetterFunction(updatedComments)
        })
    }

    return (
        <div className="comment-card">
            <p>{content}</p>
            <p className="comment-username">{user.username}</p>
            {(user.id === currentUser.id) ? <button onClick={handleEditComment} className="m-2 text-sm comment-btn">edit comment</button> : null}
            {viewingEditForm ? <EditCommentForm 
                                    comment={comment} 
                                    currentContent={content}
                                    onEditComment={onEditComment} 
                                    viewingEditFormSetterFunction={viewingEditFormSetterFunction}
                                    onDeleteComment={onDeleteComment} 
                                /> : null}
            {(user.id === currentUser.id) ? <button onClick={handleDeleteComment} className="m-2 text-sm comment-btn">delete comment</button> : null}
        </div>
    )
}

export default Comment;