import { useState } from 'react';

function EditAccountForm({ user, onEditAccountInfo, wrapViewingEditFormSetterFunction }) {
    const initialFormData = {
        name: user.name,
        username: user.username,
        email: user.email
    }

    const [ formData, setFormData ] = useState(initialFormData)
    const [ errors, setErrors ] = useState([])

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
        .then((res) => {
            if(res.ok) {
                res.json().then(() => {
                    onEditAccountInfo(formData)
                    wrapViewingEditFormSetterFunction(false)
                })
            }
            else {
                res.json().then((errors) => setErrors(errors.errors))
            }
            })
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
            {errors ? <h2>{errors.map(error => <h3>{error}</h3>)}</h2> : null}
        </div>
    )
}

export default EditAccountForm;