import ArtCard from './ArtCard.js';

function ArtList({ paintings, favs }) {

    return (
        <div>
            <h1>ArtList</h1>
            {paintings ? 
            
                paintings.map(painting => {
                    return <ArtCard key={painting.id} painting={painting} favs={favs}/>

            }) 

            : 
                <h3>Loading artlist...</h3>}
        </div>
    )
}

export default ArtList;