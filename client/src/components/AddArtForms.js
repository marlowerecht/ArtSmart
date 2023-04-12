import { useState, useEffect } from 'react';
import AddArtistForm from './AddArtistForm';
import AddPaintingForm from './AddPaintingForm'

function AddArtForms( onAddPainting, artists, onAddArtist ) {

    return (
        <div>
            {/* {artists ? <h1>loaded</h1> : <h1>not yet</h1>} */}
            <AddArtistForm onAddArtist={onAddArtist}/>
            <AddPaintingForm artists={artists} onAddPainting={onAddPainting}/>
        </div>
    )
}

export default AddArtForms;