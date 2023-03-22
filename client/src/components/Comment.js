import EditCommentForm from "./EditCommentForm.js";
import { useState } from 'react';

function Comment({ comment, currentUser, onEditComment, onDeleteComment }) {
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
        .then(() => onDeleteComment(comment))
    }

    return (
        <div>
            <p>{content}</p>
            <p>{user.username}</p>
            {(user.id === currentUser.id) ? <button onClick={handleEditComment}>edit comment</button> : null}
            {viewingEditForm ? <EditCommentForm 
                                    comment={comment} 
                                    currentContent={content}
                                    onEditComment={onEditComment} 
                                    viewingEditFormSetterFunction={viewingEditFormSetterFunction}
                                    onDeleteComment={onDeleteComment} 
                                /> : null}
            {(user.id === currentUser.id) ? <button onClick={handleDeleteComment}>delete comment</button> : null}
        </div>
    )
}

export default Comment;