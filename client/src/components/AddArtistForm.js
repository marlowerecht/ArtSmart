import { useState } from 'react';

function AddArtistForm( onAddArtist ) {

    // initial artist form values
    const initialArtistValues = {
        name: '',
        nationality: '',
        born: '',
        died: ''
    }

    // state for artist form data and errors
    const [ artistFormData, setArtistFormData ] = useState(initialArtistValues)
    const [ errors, setErrors ] = useState([])

    // destructuring artist form data
    const { name, nationality, born, died } = artistFormData

    // updates artist form data as admin types
    function handleChange(e) {
        const { name, value } = e.target
        setArtistFormData({...artistFormData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newArtist = {
            name,
            nationality,
            born,
            died
        }

        fetch('/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArtist)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then(() => {
                    setArtistFormData(initialArtistValues)
                    onAddArtist(newArtist)
                })
            } else {
                res.json().then((errors) => setErrors(errors.errors))
            }
        })
    }

    return (
        <div className="text-amber-900 shadow-md rounded m-4 bg-orange-200 w-1/3 p-2">

        <div>

        <h1 className="m-6 text-lg flex justify-center font-bold">add new artist</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>

                <div className="profile-info-div mx-2 flex">
                    <p className="flex justify-start">name</p>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">nationality</p>
                        <input 
                            type="text"
                            name="nationality"
                            value={nationality}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p classNam="flex justify-start">born</p>
                        <input 
                            type="text"
                            name="born"
                            value={born}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2">
                    <p className="flex justify-start">died</p>
                        <input 
                            type="text"
                            name="died"
                            value={died}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="profile-btn">create new artist</button>
                </div>
            </div>
        </form>
        {errors ? <h2 className="mx-4 font-bold text-lg">{errors.map(error => <h3>{error}</h3>)}</h2> : null}

        </div>

        </div>
    )
}

export default AddArtistForm;