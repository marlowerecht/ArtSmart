import Search from './Search.js'
import ArtList from './ArtList'
import { useState } from 'react';

function Homepage({ user, paintings, favorites, favPaintings, onAddFavPainting, onRemoveFavPainting, onPublishComment, onEditComment, onDeleteComment, searchTerm, filterSearch }) {

    const [ secondIndex, setSecondIndex ] = useState(5)

    let fivePaintings = paintings.slice(0, secondIndex)

    function handleClick() {
        setSecondIndex(prevIndex => prevIndex + 5)
    }

    return (
        <div className="text-amber-900">
            <div className="mt-2">
                <Search 
                    searchTerm={searchTerm} 
                    filterSearch={filterSearch}/>
            </div>
            <div>
                <ArtList 
                    user={user} 
                    paintings={fivePaintings} 
                    favorites={favorites} 
                    favPaintings={favPaintings} 
                    onAddFavPainting={onAddFavPainting} 
                    onRemoveFavPainting={onRemoveFavPainting}
                    onPublishComment={onPublishComment}
                    onEditComment={onEditComment}
                    onDeleteComment={onDeleteComment}/>
            </div>
            <div className="flex justify-center mt-3 pb-3">
                <button onClick={handleClick} className="profile-btn">view more</button>
            </div>
        </div>
    )
}

export default Homepage;