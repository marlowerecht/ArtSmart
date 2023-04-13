import { useState } from 'react';
import { useHistory } from "react-router-dom";


function AddPaintingForm({ artists, onAddNewPainting, wrapSetCount }) {
    const history = useHistory()

    console.log(artists)

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

        fetch('/paintings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPainting)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    console.log(data)

                    onAddNewPainting(data)
                    setPaintingFormData(initialPaintingValues)
                    alert(`${newPainting.name} has been created!`)
                    wrapSetCount()
                    history.push('/profile')

                })
            } else {
                res.json().then((errors) => setErrors(errors.errors))
            }
        })
        .catch((res) => console.log(res))
    }

    const sortedArtists = artists.sort(function(a, b) {
        const artistA = a.name.toUpperCase(); // ignore upper and lowercase
        const artistB = b.name.toUpperCase(); // ignore upper and lowercase
        if (artistA > artistB) {
          return 1;
        }
        if (artistA < artistB) {
          return -1;
        }
      
        // names must be equal
        return 0;
      });

    const artistsToMap = sortedArtists

    return (
        <div className="flex justify-center">

        <div className="text-amber-900 shadow-md rounded m-4 bg-orange-200 w-1/3 p-2">

        <h1 className="m-6 text-lg flex justify-center font-bold">add new artwork</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">name</p>
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">image</p>
                        <input 
                            type="text"
                            name="image"
                            value={image}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">period</p>
                        <input 
                            type="text"
                            name="period"
                            value={period}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">date</p>
                        <input 
                            type="text"
                            name="date"
                            value={date}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">medium</p>
                        <input 
                            type="text"
                            name="medium"
                            value={medium}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">dimensions</p>
                        <input 
                            type="text"
                            name="dimensions"
                            value={dimensions}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">location</p>
                        <input 
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleChange}
                            className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end"/>
                </div>

                <div className="profile-info-div m-2 flex">
                    <p className="flex justify-start">artist*</p>
                    <select name="artist_id" onChange={handleChange} className="mx-8 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300 flex justify-end">
                        {artistsToMap ? artistsToMap.map(artist => <option key={artist.id} value={artist.id} name="artist_id" onChange={handleChange}>{artist.name}</option>) : null }
                    </select>
                </div>

                <div className=" m-2 flex">
                    <p className="flex justify-center text-xs">*if the artist you are looking for is not here, please submit the add artist form first</p>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="profile-btn">create new artwork</button>
                </div>
            </div>
        </form>
        {errors ? <h2 className="mx-4 font-bold text-lg">{errors.map(error => <h3>{error}</h3>)}</h2> : null}

        </div>

        </div>
    )
}

export default AddPaintingForm;