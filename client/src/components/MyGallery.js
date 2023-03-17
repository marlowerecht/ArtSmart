import ArtList from "./ArtList";

function MyGallery({ paintings }) {

    const fav_paintings = paintings.filter(painting => {
        return painting.user_favorite === true
    })

    return(
        <div>
            <h1>My Gallery</h1>
            <ArtList paintings={fav_paintings}/>
        </div>
    )
}

export default MyGallery;