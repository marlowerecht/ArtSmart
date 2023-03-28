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
            <form onSubmit={handleSubmit} >
            <div className="text-amber-900 shadow:md m-4 bg-yellow-300 bg-opacity-30 p-2 border-2 border-amber-900 flex-col">
                <div className="profile-info-div">
                    <label> name: 
                        <input 
                            type='text' 
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className="focus:outline-none focus:border-amber-900 focus:ring focus:ring-amber-900 m-2 p-2 bg-yellow-100"/>
                    </label>
                </div>

                <div className="profile-info-div">
                    <label> username: 
                        <input 
                            type='text' 
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            className="focus:outline-none focus:border-amber-900 focus:ring focus:ring-amber-900 m-2 p-2 bg-yellow-100"/>
                    </label> 
                </div>

                <div className="profile-info-div">
                    <label> email:
                        <input 
                            type='email' 
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="focus:outline-none focus:border-amber-900 focus:ring focus:ring-amber-900 m-2 p-2 bg-yellow-100"/>
                    </label>
                </div>

                </div>

                <div className="flex justify-center">
                    <button type='submit' className="p-2 bg-yellow-100 bg-opacity-20 text-sm m-2 hover:bg-yellow-300 hover:bg-opacity-30 hover:shadow-md hover:border-2 border-amber-900 transition ease-out duration-500">save changes</button>   
                </div>
            </form>
            {errors ? <h2 className="mx-4 font-bold text-lg">{errors.map(error => <h3>{error}</h3>)}</h2> : null}
        </div>
    )
}

export default EditAccountForm;