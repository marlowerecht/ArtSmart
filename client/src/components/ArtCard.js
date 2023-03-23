import { useState } from 'react';
import Comment from './Comment.js';
import AddCommentForm from './AddCommentForm.js';

function ArtCard({ user, painting, favorites, favState, onAddFavPainting, onRemoveFavPainting, onPublishComment, onEditComment, onDeleteComment }) {

    // console.log(painting)

    const [ isFav, setIsFav ] = useState(favState)
    const [ viewingComments, setViewingComments ] = useState(false)
    const [ commentFormShowing, setCommentFormShowing ] = useState(false)

    // attributes of each painting
    const { name, image, period, date, medium, dimensions, artist, comments, user_seen } = painting

    // displays comments depending on state
    const renderedComments = comments.map(comment => {
        return <Comment 
                    key={comment.id} 
                    comment={comment} 
                    currentUser={user} 
                    onEditComment={onEditComment} 
                    onDeleteComment={onDeleteComment}/>
    })

    // adds painting to my gallery
    function handleAddFavPainting() {
        const addedPainting = {
            user_id: user.id,
            painting_id: painting.id
        }

        if(favorites.includes(addedPainting)) {
            alert('cannot add it twice!')
        } else {
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
    }

    //not working bc can't read 'favorites'
    function handleRemoveFavPainting() {

        const favorite_id = favorites.filter(favorite => favorite.painting_id === painting.id && favorite.user_id === user.id)[0].id

        fetch(`/favorites/${favorite_id}`, {
            method: 'DELETE'
        })
        .then(() => onRemoveFavPainting(painting))
        .then(() => setIsFav(false))
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

    // sends setter function to CommentForm so form disappears when user submits
    function wrapCommentFormSetterFunction(value) {
        setCommentFormShowing(value)
    }

    return (
        <div className="text-amber-900 px-16 py-6">
            <h3 className="font-bold">{name}</h3>
            <img src={image}/>
            
            <label>i've seen this one!
                <input type='checkbox' name='seenArt' value={user_seen}/>
            </label>
            
            {(isFav) ? <button onClick={handleRemoveFavPainting}>remove from gallery</button> : <button onClick={handleAddFavPainting}>add to gallery</button>}
            
            <p>{period}</p>
            <p>{date}</p>
            <p>{medium}</p>
            <p>{dimensions}</p>
            <p>{artist.name}</p>

            {viewingComments ? <button onClick={handleHideComments}>hide comments</button> : <button onClick={handleShowComments}>view comments</button>}
            {commentFormShowing ? <AddCommentForm painting={painting} user={user} commentSetterFunction={wrapCommentFormSetterFunction} onPublishComment={onPublishComment}/> : <button onClick={handleShowCommentForm}>write comment</button>}
            {viewingComments ? renderedComments : null}
        </div>
    )
}

export default ArtCard;