import ArtList from "./ArtList";

function MyGallery({ user, favPaintings, favorites, galleryPaintings, onAddFavPainting, onRemoveFavPainting, allUsers, onEditComment, onDeleteComment }) {
    
    return(
        <div>
            <h1>My Gallery</h1>
            {(galleryPaintings && favorites) ?
                <ArtList   
                    user={user} 
                    paintings={galleryPaintings} 
                    favorites={favorites} 
                    favPaintings={favPaintings} 
                    onAddFavPainting={onAddFavPainting} 
                    onRemoveFavPainting={onRemoveFavPainting}
                    allUsers={allUsers}
                    onEditComment={onEditComment}
                    onDeleteComment={onDeleteComment}
                /> : <h3>Loading gallery...</h3>}
        </div>
    )
}

export default MyGallery;