import Search from './Search.js'
import ArtList from './ArtList'

function Homepage({ user, paintings, favorites, favPaintings, onAddFavPainting, onRemoveFavPainting, onPublishComment, onEditComment, onDeleteComment, searchTerm, filterSearch }) {

    return (
        <div className="text-amber-900">
            <div className="mt-2">
                <Search 
                    searchTerm={searchTerm} 
                    filterSearch={filterSearch}/>
            </div>
            <div>
                <ArtList 
                    user={user} 
                    paintings={paintings} 
                    favorites={favorites} 
                    favPaintings={favPaintings} 
                    onAddFavPainting={onAddFavPainting} 
                    onRemoveFavPainting={onRemoveFavPainting}
                    onPublishComment={onPublishComment}
                    onEditComment={onEditComment}
                    onDeleteComment={onDeleteComment}/>
            </div>
        </div>
    )
}

export default Homepage;