import { useState } from 'react';

function AddCommentForm({ painting, user, commentSetterFunction, onPublishComment }) {
    const current = new Date();
    const today = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    const initialFormData = {
        content: '',
        date: today,
        user_id: user.id,
        painting_id: painting.id
    }

    const [ formData, setFormData ] = useState(initialFormData)

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(onPublishComment(formData))
        .then(setFormData(initialFormData))
        .then(commentSetterFunction(false))
    }

    // hides form is user decides not to write comment
    function handleNevermind() {
        commentSetterFunction(false)
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
                <button type='submit'>publish comment</button>
            </form>
            <button onClick={handleNevermind}>nevermind</button>
        </div>
    )
}

export default AddCommentForm;