import { useState } from 'react';
import Comment from './Comment.js';
import AddCommentForm from './AddCommentForm.js';

function ArtCard({ user, painting, favorites, favState, onAddFavPainting, onRemoveFavPainting, onPublishComment, onEditComment }) {

    const [ isFav, setIsFav ] = useState(favState)
    const [ viewingComments, setViewingComments ] = useState(false)
    const [ commentFormShowing, setCommentFormShowing ] = useState(false)

    // attributes of each painting
    const { name, image, department, period, culture, date, medium, dimensions, tags, artist, comments, user_favorite, user_bucketlist, user_seen } = painting

    // renders comments depending on state
    const renderedComments = comments.map(comment => {
        return <Comment key={comment.id} comment={comment} currentUser={user} onEditComment={onEditComment}/>
    })

    // adds painting to my gallery
    function handleAddFavPainting() {
        const addedPainting = {
            user_id: user.id,
            painting_id: painting.id
        }

        fetch('/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedPainting)
        })
        .then(res => res.json())
        .then(() => onAddFavPainting(painting))
        .then(setIsFav(true))
    }

    //not working bc can't read 'favorites'
    function handleRemoveFavPainting() {
        //filters favorites and grabs only those that belong to this painting
        const favoritesOfThisPainting = favorites.filter(favorite => favorite.painting_id === painting.id)
        //filters that array and finds the favorite instance belonging to current user
        const favoriteOfThisPaintingAndUser = favoritesOfThisPainting.filter(favorite => favorite.user_id === user.id)
        const favorite_id = favoriteOfThisPaintingAndUser.id

        fetch(`/favorites/${favorite_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => onRemoveFavPainting(painting))
        .then(setIsFav(false))
    }

    // shows comments
    function handleShowComments() {
        setViewingComments(true)
    }

    // hides comments
    function handleHideComments() {
        setViewingComments(false)
    }

    // shows new comment form when clicked
    function handleShowCommentForm() {
        setCommentFormShowing(true)
    }

    // sends setter function to CommentForm so form disappears when they submit
    function wrapCommentFormSetterFunction(value) {
        setCommentFormShowing(value)
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={image}/>
            
            <label>i've seen this one!</label>
                <input type='checkbox' name='seenArt' value={user_seen}/>
            
            {(isFav) ? <button onClick={handleRemoveFavPainting}>remove from gallery</button> : <button onClick={handleAddFavPainting()}>add to gallery</button>}
            
            <p>{department}</p>
            <p>{period}</p>
            <p>{culture}</p>
            <p>{date}</p>
            <p>{medium}</p>
            <p>{dimensions}</p>
            <p>{tags}</p>
            <p>{artist.name}</p>
            {viewingComments ? <button onClick={handleHideComments}>hide comments</button> : <button onClick={handleShowComments}>view comments</button>}
            {commentFormShowing ? <AddCommentForm painting={painting} user={user} commentSetterFunction={wrapCommentFormSetterFunction} onPublishComment={onPublishComment}/> : <button onClick={handleShowCommentForm}>write comment</button>}
            {viewingComments ? renderedComments : null}

        </div>
    )
}

export default ArtCard;