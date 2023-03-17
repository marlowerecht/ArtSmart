function ArtCard({ painting }) {

    const { name, image, department, period, culture, date, medium, dimensions, tags, artist } = painting

    return (
        <div>
            <h3>{name}</h3>
            <img src={image}/>
            <p>{department}</p>
            <p>{period}</p>
            <p>{culture}</p>
            <p>{date}</p>
            <p>{medium}</p>
            <p>{dimensions}</p>
            <p>{tags}</p>
            <p>{artist.name}</p>

        </div>
    )
}

export default ArtCard;