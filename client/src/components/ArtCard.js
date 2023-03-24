import { useState } from 'react';
import Comment from './Comment.js';
import AddCommentForm from './AddCommentForm.js';

function ArtCard({ user, painting, favorites, favState, onAddFavPainting, onRemoveFavPainting, onPublishComment, onEditComment, onDeleteComment }) {

    // attributes of each painting
    const { name, image, period, date, medium, dimensions, artist, comments, user_seen } = painting

    const [ isFav, setIsFav ] = useState(favState)
    const [ viewingComments, setViewingComments ] = useState(false)
    const [ commentFormShowing, setCommentFormShowing ] = useState(false)
    const [ paintingComments, setPaintingComments ] = useState(comments)

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

    function wrapCommentSetterFunction(newComment) {
        setPaintingComments([...paintingComments, newComment])
    }

    console.log(paintingComments)

    return (
        <div className="painting-card">
            <div className="m-4 block">
                <img className="painting-img" src={image}/>
            </div>
            
            <div className="m-4">
                <div className="m-4">
                    <h3 className="font-bold">{name}</h3>
                    <p>{artist.name}</p>
                    <p>{period}</p>
                    <p>{date}</p>
                    <p>{medium}</p>
                    <p>{dimensions}</p>
                    <div className="m-4 block">
                        {/* <label>i've seen this one!
                            <input type='checkbox' name='seenArt' value={user_seen}/>
                        </label> */}
                        {(isFav) ? <button onClick={handleRemoveFavPainting}>remove from gallery</button> : <button onClick={handleAddFavPainting}>add to gallery</button>} 
                    </div>
                    <div className="block"> 
                        {viewingComments ? <button onClick={handleHideComments} className="m-2">hide comments</button> : <button onClick={handleShowComments} className="m-2">view comments</button>}
                        {commentFormShowing ? <AddCommentForm 
                                                painting={painting} 
                                                user={user} 
                                                commentFormSetterFunction={wrapCommentFormSetterFunction}
                                                onPublishComment={onPublishComment} 
                                                wrapCommentSetterFunction={wrapCommentSetterFunction}/> 
                                            : <button onClick={handleShowCommentForm} className="m-2">write comment</button>}
                        {viewingComments ? renderedComments : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtCard;