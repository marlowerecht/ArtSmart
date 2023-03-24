import { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddCommentForm({ painting, user, commentFormSetterFunction, onPublishComment, wrapCommentSetterFunction }) {
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
            wrapCommentSetterFunction(formData)
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
                        type='text' 
                        name='content'
                        value={formData.content}
                        onChange={handleChange}/>
                </label>
                <button type='submit' className="m-2 text-sm">publish comment</button>
            </form>
            <button onClick={handleNevermind} className="m-2 text-sm">nevermind</button>
        </div>
    )
}

export default AddCommentForm;