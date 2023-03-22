import ArtList from "./ArtList";

function MyGallery({ user, favPaintings, favorites, paintings, onAddFavPainting, onRemoveFavPainting, allUsers, onEditComment, onDeleteComment }) {

    return(
        <div>
            <h1>My Gallery</h1>
            {(paintings && favorites) ?
                <ArtList   
                    user={user} 
                    paintings={paintings} 
                    favorites={favorites} 
                    favPaintings={paintings} 
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