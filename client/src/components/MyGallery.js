import ArtList from "./ArtList";

function MyGallery({ favPaintings, favorites, galleryPaintings, onAddFavPainting, onRemoveFavPainting }) {

    return(
        <div>
            <h1>My Gallery</h1>
            {(galleryPaintings && favorites) ?
                <ArtList paintings={galleryPaintings} favorites={favorites} favPaintings={favPaintings} onAddFavPainting={onAddFavPainting} onRemoveFavPainting={onRemoveFavPainting}/> : <h3>Loading gallery...</h3>}
        </div>
    )
}

export default MyGallery;