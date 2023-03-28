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
                res.json().then((errors) => setErrors(errors.errors))
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    return (
        <div className="flex-col h-screen">
            <h1 className="text-5xl flex justify-center p-4">A r t S m a r t</h1>
            <h2 className="text-3xl flex justify-center mt-10">s i g n u p</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="bg-orange-200 rounded shadow-md mx-96 my-12 py-10">
                    <div className="flex justify-center m-3">
                        <label>name
                            <input 
                                className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"
                                type='text' 
                                name='name'
                                value={name}
                                onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="flex justify-center m-3">
                        <label>username
                            <input 
                                className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"
                                type='text' 
                                name='username'
                                value={username}
                                onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="flex justify-center m-3">
                        <label>email
                            <input 
                                className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"
                                type='email' 
                                name='email'
                                value={email}
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
                        <button type='submit' className="profile-btn">signup</button>
                    </div>
                </div>
            </form>
            {errors ? <h2>{errors.map(error => <h3>{error}</h3>)}</h2> : null}
        </div>
    )
}

export default Signup;