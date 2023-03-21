import Search from './Search.js'
import ArtList from './ArtList'

function Homepage({ user, paintings, favorites, favPaintings, onAddFavPainting, onRemoveFavPainting, onPublishComment, onEditComment, onDeleteComment, searchTerm, filterSearch }) {

    return (
        <div>
            <h1>homepage</h1>
            {user ? <h2>hello, {user.name}</h2> : <h2>loading...</h2>}
            <Search 
                searchTerm={searchTerm} 
                filterSearch={filterSearch}/>
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
    )
}

export default Homepage;