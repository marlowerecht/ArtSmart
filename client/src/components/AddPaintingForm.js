import { useState } from 'react';

function AddPaintingForm( artists, onAddPainting ) {

    // initial painting form values
    const initialPaintingValues = {
        name: '',
        image: '',
        period: '',
        date: '',
        medium: '',
        dimensions: '',
        location: '',
        artist_id: null
    }

    // state for painting form data and errors
    const [ paintingFormData, setPaintingFormData ] = useState(initialPaintingValues)
    const [ errors, setErrors ] = useState([])

    // destructuring painting form data
    const { name, image, period, date, medium, dimensions, location, artist_id } = paintingFormData

    // updates painting form data as admin types
    function handleChange(e) {
        const { name, value } = e.target
        setPaintingFormData({...paintingFormData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newPainting = {
            name,
            image,
            period,
            date,
            medium,
            dimensions,
            location,
            artist_id
        }

        console.log(newPainting)

        fetch('/paintings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPainting)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then(() => {
                    onAddPainting(newPainting)
                    setPaintingFormData(initialPaintingValues)
                })
            } else {
                res.json().then((errors) => setErrors(errors.errors))
            }
        })
    }

    const artistsToMap = artists.onAddPainting.artists

    return (
        <div className="text-amber-900 shadow-md rounded m-4 bg-orange-200 w-1/3 p-2 flex justify-center">

        <h1 className="m-6 text-lg flex justify-center font-bold">add new artwork</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <div className="profile-info-div m-2">
                    <label>name
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"/>
                    </label>
                </div>

                <div className="profile-info-div m-2">
                    <label>image
                        <input 
                            type="text"
                            name="image"
                            value={image}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"/>
                    </label>
                </div>

                <div className="profile-info-div m-2">
                    <label>period
                        <input 
                            type="text"
                            name="period"
                            value={period}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"/>
                    </label>
                </div>

                <div className="profile-info-div m-2">
                    <label>date
                        <input 
                            type="text"
                            name="date"
                            value={date}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"/>
                    </label>
                </div>

                <div className="profile-info-div m-2">
                    <label>medium
                        <input 
                            type="text"
                            name="medium"
                            value={medium}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"/>
                    </label>
                </div>

                <div className="profile-info-div m-2">
                    <label>dimensions
                        <input 
                            type="text"
                            name="dimensions"
                            value={dimensions}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"/>
                    </label>
                </div>

                <div className="profile-info-div m-2">
                    <label>location
                        <input 
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"/>
                    </label>
                </div>

                <div className="profile-info-div m-2">
                    <label>artist</label>
                    <select name="artist_id" onChange={handleChange} className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300">
                        {artistsToMap.map(artist => <option key={artist.id} value={artist.id} name="artist_id" onChange={handleChange}>{artist.name}</option>)}
                    </select>
                </div>

                <div>
                    <button type="submit" className="profile-btn">create new artwork</button>
                </div>
            </div>
        </form>
        {errors ? <h2 className="mx-4 font-bold text-lg">{errors.map(error => <h3>{error}</h3>)}</h2> : null}

        </div>
    )
}

export default AddPaintingForm;