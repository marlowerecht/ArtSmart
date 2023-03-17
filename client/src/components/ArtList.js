import ArtCard from './ArtCard.js';

function ArtList({ paintings }) {

    return (
        <div>
            <h1>ArtList</h1>
            {paintings ? 
            
                paintings.map(painting => {
                    return <ArtCard key={painting.id} painting={painting}/>

            }) 

            : 
                <h3>Loading artlist...</h3>}
        </div>
    )
}

export default ArtList;