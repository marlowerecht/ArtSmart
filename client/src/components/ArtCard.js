import { useState } from 'react';

function ArtCard({ painting, favorites, favState, onAddFavPainting, onRemoveFavPainting }) {

    const [ isFav, setIsFav ] = useState(favState)

    // attributes of each painting
    const { name, image, department, period, culture, date, medium, dimensions, tags, artist, user_favorite, user_bucketlist, user_seen } = painting

    function handleAddFavPainting() {
        setIsFav(true)
        onAddFavPainting(painting)
    }

    function handleRemoveFavPainting() {
        setIsFav(false)
        onRemoveFavPainting(painting)
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={image}/>
            
            <label>i've seen this one!</label>
                <input type='checkbox' name='seenArt' value={user_seen}/>
            
            <p>{department}</p>
            <p>{period}</p>
            <p>{culture}</p>
            <p>{date}</p>
            <p>{medium}</p>
            <p>{dimensions}</p>
            <p>{tags}</p>
            <p>{artist.name}</p>

            {isFav ? <button onClick={handleRemoveFavPainting}>remove from gallery</button> : <button onClick={handleAddFavPainting}>add to gallery</button>}
        </div>
    )
}

export default ArtCard;