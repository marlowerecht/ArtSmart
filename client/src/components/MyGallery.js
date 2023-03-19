import ArtList from "./ArtList";

function MyGallery({ user, favPaintings, favorites, galleryPaintings }) {

    return(
        <div>
            <h1>My Gallery</h1>
            {(galleryPaintings && favorites) ?
                <ArtList paintings={galleryPaintings} favorites={favorites} favPaintings={favPaintings}/> : <h3>Loading gallery...</h3>}
        </div>
    )
}

export default MyGallery;