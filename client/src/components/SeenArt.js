import ArtList from "./ArtList";

function SeenArt({ paintings }) {

    const seenPaintings = paintings.filter(painting => {
        return painting.user_seen === true
    })

    return(
        <div>
            <h1>i've seen these</h1>
            <ArtList paintings={seenPaintings}/>
        </div>
    )
}

export default SeenArt;