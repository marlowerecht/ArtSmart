import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ onLogin }) {
    const initialFormValues = {username: '', password: ''}

    const [ formData, setFormData ] = useState(initialFormValues)
    const [ errors, setErrors ] = useState([])
    const history = useHistory()

    const { username, password } = formData

    function handleSubmit(e) {
        e.preventDefault();

        const user = {
            username,
            password
        }

        fetch ('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    onLogin(user)
                    setFormData(initialFormValues)
                    history.push('/')
                })
            }
            else {
                res.json().then((errors) => setErrors(errors.error))
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleClick() {
        history.push('/signup')
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>username
                    <input 
                        type='text' 
                        name='username'
                        value={username}
                        onChange={handleChange}/>
                </label>
                <label>password
                    <input 
                        type='password' 
                        name='password'
                        value={password}
                        onChange={handleChange}/>
                </label>
                <button type='submit' className="profile-btn">login</button>
            </form>
            {errors ? <h2>{errors}</h2> : null}

            <h3>don't have an account?</h3>
            <button onClick={handleClick} className="profile-btn">signup</button>
        </div>
    )
}

export default Login;