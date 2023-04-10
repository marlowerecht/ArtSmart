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
                    <label>nationality
                        <input 
                            type="text"
                            name="nationality"
                            value={nationality}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>born
                        <input 
                            type="text"
                            name="born"
                            value={born}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>died
                        <input 
                            type="text"
                            name="died"
                            value={died}
                            onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <button type="submit">create new artist</button>
                </div>
            </div>
        </form>
        {errors ? <h2 className="mx-4 font-bold text-lg">{errors.map(error => <h3>{error}</h3>)}</h2> : null}

        </div>
    )
}

export default AddArtistForm;