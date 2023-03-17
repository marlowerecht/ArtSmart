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
                    history.push('/homepage')
                })
            }
            else {
                // res.json().then(json => setErrors(Object.entries(json.errors)))
                res.json().then((poo) => console.log(poo))
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username
                    <input 
                        type='text' 
                        name='username'
                        value={username}
                        onChange={handleChange}/>
                </label>
                <label>Password
                    <input 
                        type='password' 
                        name='password'
                        value={password}
                        onChange={handleChange}/>
                </label>
                <button type='submit'>login</button>
            </form>
            {errors ? <h2>{errors}</h2> : null}
        </div>
    )
}

export default Login;