import ArtCard from './ArtCard.js';

function ArtList({ paintings }) {

    const renderPaintings = paintings.map(painting => {
        return <ArtCard key={painting.id} painting={painting}/>
    })

    return (
        <div>
            <h1>ArtList</h1>
            {renderPaintings}
        </div>
    )
}

export default ArtList;