import { useState } from 'react';
import { useHistory } from "react-router-dom";


function EditCommentForm({ currentContent, comment, onEditComment, viewingEditFormSetterFunction }) {
    const history = useHistory()

    const initialFormData = {
        content: currentContent
    }

    const [ formData, setFormData ] = useState(initialFormData)

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // submits updated comment
    function handleSubmit(e) {
        e.preventDefault();

        fetch(`/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(() => {
            onEditComment(formData)
            viewingEditFormSetterFunction(false)
            history.push("/homepage")
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text' 
                        name='content'
                        value={formData.content}
                        onChange={handleChange}/>
                </label>
                <button type='submit' className="m-2 text-sm">publish</button>
            </form>
        </div>
    )
}

export default EditCommentForm;