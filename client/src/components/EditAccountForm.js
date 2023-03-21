import { useState } from 'react';

function EditAccountForm({ user, onEditAccountInfo, wrapViewingEditFormSetterFunction }) {
    const initialFormData = {
        name: user.name,
        username: user.username,
        email: user.email
    }

    const [ formData, setFormData ] = useState(initialFormData)

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(onEditAccountInfo(formData))
        .then(wrapViewingEditFormSetterFunction(false))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> name: 
                    <input 
                        type='text' 
                        name='name'
                        value={formData.name}
                        onChange={handleChange}/>
                </label>

                <label> username: 
                    <input 
                        type='text' 
                        name='username'
                        value={formData.username}
                        onChange={handleChange}/>
                </label>

                <label> email: 
                    <input 
                        type='email' 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}/>
                </label>

                <button type='submit'>save changes</button>
            </form>
        </div>
    )
}

export default EditAccountForm;