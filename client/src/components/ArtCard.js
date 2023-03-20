import { useState } from 'react';

function ArtCard({ user, painting, favorites, favState, onAddFavPainting, onRemoveFavPainting }) {

    const [ isFav, setIsFav ] = useState(favState)

    // attributes of each painting
    const { name, image, department, period, culture, date, medium, dimensions, tags, artist, user_favorite, user_bucketlist, user_seen } = painting

    function handleAddFavPainting() {
        const addedPainting = {
            user_id: user.id,
            painting_id: painting.id
        }

        fetch('/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedPainting)
        })
        .then(res => res.json())
        .then(() => onAddFavPainting(painting))
        .then(setIsFav(true))
    }

    function handleRemoveFavPainting() {
        //filters favorites and grabs only those that belong to this painting
        const favoritesOfThisPainting = favorites.filter(favorite => favorite.painting_id === painting.id)
        //filters that array and finds the favorite instance belonging to current user
        const favoriteOfThisPaintingAndUser = favoritesOfThisPainting.filter(favorite => favorite.user_id === user.id)
        const favorite_id = favoriteOfThisPaintingAndUser.id

        fetch(`/favorites/${favorite_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => onRemoveFavPainting(painting))
        .then(setIsFav(false))
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

            {(isFav) ? <button onClick={handleRemoveFavPainting}>remove from gallery</button> : <button onClick={handleAddFavPainting()}>add to gallery</button>}
        </div>
    )
}

export default ArtCard;