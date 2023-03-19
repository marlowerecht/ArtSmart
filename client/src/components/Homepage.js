import Search from './Search.js'
import ArtList from './ArtList'

function Homepage({ user, paintings, favorites, favPaintings, onAddFavPainting, onRemoveFavPainting }) {

    return (
        <div>
            <h1>homepage</h1>
            {user ? <h2>hello, {user.name}</h2> : <h2>loading...</h2>}
            <Search />
            <ArtList paintings={paintings} favorites={favorites} favPaintings={favPaintings} onAddFavPainting={onAddFavPainting} onRemoveFavPainting={onRemoveFavPainting}/>
        </div>
    )
}

export default Homepage;