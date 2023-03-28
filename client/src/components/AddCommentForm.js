import { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddCommentForm({ painting, user, commentFormSetterFunction, onPublishComment, wrapCommentSetterFunction, wrapViewingCommentsSetterFunction, paintingComments }) {
    const history = useHistory()

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
        .then(() => {
            onPublishComment(formData)
            setFormData(initialFormData)
            commentFormSetterFunction(false) 
            wrapCommentSetterFunction([...paintingComments, {...formData, user: user}])
            wrapViewingCommentsSetterFunction(true)
        })
    }

    // hides form is user decides not to write comment
    function handleNevermind() {
        commentFormSetterFunction(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"
                        type='text' 
                        name='content'
                        value={formData.content}
                        onChange={handleChange}/>
                </label>
                <button type='submit' className="m-2 text-sm comment-btn">publish comment</button>
            </form>
            <button onClick={handleNevermind} className="m-2 text-sm comment-btn">nevermind</button>
        </div>
    )
}

export default AddCommentForm;