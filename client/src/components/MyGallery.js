import ArtList from "./ArtList";

function MyGallery({ user, paintings, userFavorites }) {

    const findUserFavs = () => {
        const favoritesAndUserIDs = userFavorites.filter(favorite => favorite.user_id === user.id)

        const favoritesAndPaintingsIDs = favoritesAndUserIDs.map(favorite => favorite.id)

        const favs = paintings.filter(painting => {
            return favoritesAndPaintingsIDs.includes(painting.id)
        })
        console.log(favs)
        return favs
    }

    return(
        <div>
            <h1>My Gallery</h1>
            {(paintings && userFavorites) ?
                <ArtList paintings={findUserFavs()}/> : <h3>Loading gallery...</h3>}
        </div>
    )
}

export default MyGallery;

// return paintings.find(painting => {
//     return painting.id === fav.painting_id && fav.user_id === user.id})})