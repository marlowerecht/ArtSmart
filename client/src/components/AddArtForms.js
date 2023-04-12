import { useState, useEffect } from 'react';
import AddArtistForm from './AddArtistForm';
import AddPaintingForm from './AddPaintingForm'

function AddArtForms( onAddPainting, artists, onAddArtist ) {

    return (
        <div className="flex justify-center">
            <AddArtistForm onAddArtist={onAddArtist}/>
            <AddPaintingForm artists={artists} onAddPainting={onAddPainting}/>
        </div>
    )
}

export default AddArtForms;