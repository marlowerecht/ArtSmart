import ArtList from "./ArtList";

function MyGallery({ user, favPaintings, favorites, paintings, onAddFavPainting, onRemoveFavPainting, allUsers, onEditComment, onDeleteComment, onPublishComment }) {

    return(
        <div>
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
                    onPublishComment={onPublishComment}
                /> : <h3>Loading gallery...</h3>}
        </div>
    )
}

export default MyGallery;