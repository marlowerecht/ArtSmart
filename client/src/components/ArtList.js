import ArtCard from './ArtCard.js';

function ArtList({ user, paintings, favorites, favPaintings, onAddFavPainting, onRemoveFavPainting, allUsers }) {

    return (
        <div>
            <h1>ArtList</h1>
            {(paintings && favorites) ? 
            
                paintings.map(painting => {
                    return <ArtCard 
                                key={painting.id} 
                                user={user} 
                                painting={painting} 
                                favState={favPaintings.includes(painting)} 
                                onAddFavPainting={onAddFavPainting} 
                                onRemoveFavPainting={onRemoveFavPainting}
                                allUsers={allUsers} />

            }) 

            : 
                <h3>Loading artlist...</h3>}
        </div>
    )
}

export default ArtList;

// favorites={favorites} favState={isFav(painting)}