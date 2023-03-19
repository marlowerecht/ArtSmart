import Search from './Search.js'
import ArtList from './ArtList'

function Homepage({ user, paintings, favorites, favPaintings }) {

    return (
        <div>
            <h1>homepage</h1>
            {user ? <h2>hello, {user.name}</h2> : <h2>loading...</h2>}
            <Search />
            <ArtList paintings={paintings} favorites={favorites} favPaintings={favPaintings}/>
        </div>
    )
}

export default Homepage;