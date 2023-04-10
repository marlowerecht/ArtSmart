import { useState, useEffect } from 'react';
import AddArtistForm from './AddArtistForm';
import AddPaintingForm from './AddPaintingForm'

function AddArtForms( onAddPainting ) {

    const [ artists, setArtists ] = useState([])

    useEffect(() => {
        fetch('/artists')
        .then(res => {
            if(res.ok) {
                return res.json().then((artists) => setArtists(artists))
            }
        })
    }, [])

    function onAddArtist(newArtist) {
        setArtists([...artists, newArtist])
    }

    console.log(artists)

    return (
        <div>
            <AddArtistForm onAddArtist={onAddArtist}/>
            <AddPaintingForm artists={artists} onAddPainting={onAddPainting}/>
        </div>
    )
}

export default AddArtForms;