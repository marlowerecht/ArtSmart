import ArtList from "./ArtList";

function BucketList({ paintings }) {

    const bucketListPaintings = paintings.filter(painting => {
        return painting.user_bucketlist === true
    })

    return(
        <div>
            <h1>BucketList</h1>
            <ArtList paintings={bucketListPaintings}/>
        </div>
    )
}

export default BucketList;