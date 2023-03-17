import { useState } from 'react';

function ArtCard({ painting, favs }) {

    const [ showingAddToFavButton, setShowingAddToFavButton ] = useState(true)

    const [ isFav, setIsFav ] = useState(false)

    function checkingIfFav() {
        const favOrNot = favs.includes(painting)
        if (favOrNot === true) {
            setIsFav(true)
        }
        else {
            setIsFav(false)
        }
    }

    //check is useEffect could work
    // checkingIfFav()

    console.log(isFav)

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

            {/* <button onClick={handleAddToGallery}>add to my gallery</button> */}
        </div>
    )
}

export default ArtCard;