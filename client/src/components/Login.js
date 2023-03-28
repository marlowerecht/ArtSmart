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
        <div className="flex-col h-screen">
            <h1 className="text-5xl flex justify-center p-4">A r t S m a r t</h1>
            <h2 className="text-3xl flex justify-center mt-10">l o g i n</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="bg-orange-200 rounded shadow-md mx-96 my-12 py-10">
                    <div className="flex justify-center m-3">
                        <label className="flex justify-start">username
                            <input 
                                className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"
                                type='text' 
                                name='username'
                                value={username}
                                onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="flex justify-center m-3">
                        <label>password
                            <input 
                                className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"
                                type='password' 
                                name='password'
                                value={password}
                                onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="flex justify-center m-3">
                        <button type='submit' className="profile-btn">login</button>
                    </div>
                </div>
            </form>
            {errors ? <h2 className="mx-4 font-bold text-lg">{errors}</h2> : null}

            <div className="flex-col">
                <h3 className="flex justify-center font-bold">don't have an account?</h3>
                <div className="flex justify-center">
                    <button onClick={handleClick} className="text-xl profile-btn">signup</button>
                </div>
            </div>

        </div>
    )
}

export default Login;