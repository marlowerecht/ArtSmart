function ArtCard({ painting }) {

    // attributes of each painting
    const { name, image, department, period, culture, date, medium, dimensions, tags, artist, user_favorite, user_bucketlist, user_seen } = painting

    // returns information for painting
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

            <label>add to:</label>
            <select name="paintingLists">
                <option value={user_favorite}>my gallery</option>
                <option value={user_bucketlist}>bucket list</option>
            </select>
        </div>
    )
}

export default ArtCard;