import ArtList from "./ArtList";

function MyGallery({ user, favorites, paintings, onAddFavPainting, onRemoveFavPainting, allUsers, onEditComment, onDeleteComment, onPublishComment }) {

    return(
        <div className="min-h-screen z-0">
            <h3 className="m-6 text-lg flex justify-center">m y g a l l e r y</h3>
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