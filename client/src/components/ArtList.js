import ArtCard from './ArtCard.js';

function ArtList({ user, paintings, favorites, favPaintings, onAddFavPainting, onRemoveFavPainting, onPublishComment, onEditComment, onDeleteComment }) {

    return (
        <div className="md:flex grid-cols-2 justify-around">
            {(paintings && favorites) ? 
                paintings.map(painting => {
                    return <ArtCard 
                                key={painting.id} 
                                user={user} 
                                painting={painting} 
                                favorites={favorites}
                                favState={favPaintings.includes(painting)} 
                                onAddFavPainting={onAddFavPainting} 
                                onRemoveFavPainting={onRemoveFavPainting}
                                onPublishComment={onPublishComment}
                                onEditComment={onEditComment}
                                onDeleteComment={onDeleteComment} />
                }) 
            : 
                <h3>Loading artlist...</h3>}
        </div>
    )
}

export default ArtList;