import { useState } from 'react'

function EditCommentForm({ currentContent, comment, onEditComment, viewingEditFormSetterFunction }) {
    const initialFormData = {
        content: currentContent
    }

    const [ formData, setFormData ] = useState(initialFormData)

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

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
        .then(onEditComment(formData))
        .then(viewingEditFormSetterFunction(false))
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
                <button type='submit'>publish</button>
            </form>
        </div>
    )
}

export default EditCommentForm;