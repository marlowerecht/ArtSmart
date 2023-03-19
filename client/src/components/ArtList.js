import ArtCard from './ArtCard.js';

function ArtList({ paintings, favorites, favPaintings }) {

    return (
        <div>
            <h1>ArtList</h1>
            {(paintings && favorites) ? 
            
                paintings.map(painting => {
                    return <ArtCard key={painting.id} painting={painting} favState={favPaintings.includes(painting)}/>

            }) 

            : 
                <h3>Loading artlist...</h3>}
        </div>
    )
}

export default ArtList;

// favorites={favorites} favState={isFav(painting)}