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
        artist: ''
    }

    // state for painting form data and errors
    const [ paintingFormData, setPaintingFormData ] = useState(initialPaintingValues)
    const [ errors, setErrors ] = useState([])

    // destructuring painting form data
    const { name, image, period, date, medium, dimensions, location, artist } = paintingFormData

    // updates painting form data as admin types
    function handleChange(e) {
        const { name, value } = e.target
        setPaintingFormData({...paintingFormData, [name]: value })
    }

    // const artistID = artist.id

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
            artist
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
                res.json().then(() => {
                    onAddPainting(newPainting)
                    setPaintingFormData(initialPaintingValues)
                })
            } else {
                res.json().then((errors) => setErrors(errors.errors))
            }
        })
    }

    // console.log(artists)

    function mapArtists() {
        artists.map(artist => {
            return <option value={artist.id}>artist.name</option>
        })
    }

    return (
        <div>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <div>
                    <label>name
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>image
                        <input 
                            type="text"
                            name="image"
                            value={image}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>period
                        <input 
                            type="text"
                            name="period"
                            value={period}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>date
                        <input 
                            type="text"
                            name="date"
                            value={date}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>medium
                        <input 
                            type="text"
                            name="medium"
                            value={medium}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>dimensions
                        <input 
                            type="text"
                            name="dimensions"
                            value={dimensions}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>location
                        <input 
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>artist</label>
                    <select name="artist">
                        {mapArtists()}
                    </select>
                        {/* <input 
                            type="text"
                            name="artist"
                            value={artist}
                            onChange={handleChange}/> */}

                </div>

                <div>
                    <button type="submit">create new artist</button>
                </div>
            </div>
        </form>
        {errors ? <h2 className="mx-4 font-bold text-lg">{errors.map(error => <h3>{error}</h3>)}</h2> : null}

        </div>

        //art form
            //find artist by name
            //post to db and state
            //make sure it adds without refreshing
    )
}

export default AddPaintingForm;