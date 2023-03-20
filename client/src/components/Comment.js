import EditCommentForm from "./EditCommentForm.js";
import { useState } from 'react';

function Comment({ comment, currentUser, onEditComment }) {
    const [ viewingEditForm, setViewingEditForm ] = useState(false)

    const { content, user } = comment

    function handleEditComment() {
        setViewingEditForm(true)
    }

    function viewingEditFormSetterFunction(value) {
        setViewingEditForm(value)
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
                                /> : null}
        </div>
    )
}

export default Comment;