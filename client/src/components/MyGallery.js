import ArtList from "./ArtList";

function MyGallery({ currentUser }) {
    return(
        <div>
            <h1>My Gallery</h1>
            <ArtList currentUser={currentUser}/>
        </div>
    )
}

export default MyGallery;