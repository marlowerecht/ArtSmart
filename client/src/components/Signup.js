import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ onLogin }) {
    const initialFormValues = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    const [ formData, setFormData ] = useState(initialFormValues)
    const [ errors, setErrors ] = useState([])
    const history = useHistory()

    const { name, username, email, password } = formData

    function handleSubmit(e) {
        e.preventDefault();

        const newUser = {
            name,
            username,
            email,
            password
        }

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((user) => {
                    onLogin(user)
                    setFormData(initialFormValues)
                    history.push('/homepage')
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    return (
        <div>
            <h1>signup</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>name
                    <input 
                        type='text' 
                        name='name'
                        value={name}
                        onChange={handleChange}/>
                </label>
                <label>username
                    <input 
                        type='text' 
                        name='username'
                        value={username}
                        onChange={handleChange}/>
                </label>
                <label>email
                    <input 
                        type='email' 
                        name='email'
                        value={email}
                        onChange={handleChange}/>
                </label>
                <label>password
                    <input 
                        type='password' 
                        name='password'
                        value={password}
                        onChange={handleChange}/>
                </label>
                <button type='submit'>signup</button>
            </form>
            {errors ? <h2>{errors}</h2> : null}
        </div>
    )
}

export default Signup;