import { useState } from 'react';

function ArtCard({ painting, favorites, favState }) {

    const [ showingAddToFavButton, setShowingAddToFavButton ] = useState(true)

    const [ isFav, setIsFav ] = useState(favState)

    console.log(isFav)

    // function checkingIfFav() {
    //     const favOrNot = favs.includes(painting)
    //     if (favOrNot === true) {
    //         setIsFav(true)
    //     }
    //     else {
    //         setIsFav(false)
    //     }
    // }

    //check is useEffect could work
    // checkingIfFav()

    // attributes of each painting
    const { name, image, department, period, culture, date, medium, dimensions, tags, artist, user_favorite, user_bucketlist, user_seen } = painting

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

            {isFav ? <button>remove from gallery</button> : <button>add to gallery</button>}
        </div>
    )
}

export default ArtCard;