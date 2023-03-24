import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';
import Homepage from './components/Homepage.js';
import Profile from './components/Profile.js';
import Header from './components/Header.js';
import MyGallery from './components/MyGallery.js'
import DeleteAccount from "./components/DeleteAccount.js";
import Signup from "./components/Signup.js";
// import './index.css'

function App() {
  //state
  const [ currentUser, setCurrentUser ] = useState(null)
  const [ paintings, setPaintings ] = useState([])
  const [ favorites, setFavorites ] = useState([])
  const [ comments, setComments ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')  

  // fetches data of current user
  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  },[])

  // fetches all paintings
  useEffect(() => {
    fetch('/paintings')
    .then(res => {
      if(res.ok) {
        return res.json().then((paintings) => setPaintings(paintings))
      }
    })
  },[currentUser])

  // fetches all favorites of current user
  useEffect(() => {
    fetch(`/favorites`)
    .then(res => {
      if(res.ok) {
        res.json().then((favorites) => setFavorites(favorites))
      }
    })
  },[currentUser])

  // fetches all comments
  useEffect(() => {
    fetch('/comments')
    .then(res => {
      if(res.ok) {
        res.json().then((comments) => setComments(comments))
      }
    })
  },[currentUser])

  // sets current user to logged in user
  function onLogin(user) {
    setCurrentUser(user)
  }

  // logs out user
  function onLogout() {
    setCurrentUser(null)
  }

  //MY GALLERY PAINTINGS
  // returns array of paintings that the current user has favorited
  function favoritePaintings() {
    // make array of the IDs of the paintings that are favorited by the current user
    const favoritesAndPaintingsIDs = favorites.map(favorite => favorite.painting_id)
    // filters through all paintings to see if any of the paintings have ID of favorited painting ID
    const favs = paintings.filter(painting => {
      return favoritesAndPaintingsIDs.includes(painting.id)})
    return favs
  }

  //add paintnig to user's gallery (favorites)
  function onAddFavPainting(painting) {
    setFavorites([...favorites, painting])
  }

  //removes painting from user's gallery (favorites)
  function onRemoveFavPainting(painting) {
    const updatedFavorites = favorites.filter(favorite => favorite.painting_id !== painting.id)
    setFavorites(updatedFavorites)
  }

  // adds a new comments
  function onPublishComment(newComment) {
    setComments([...comments, newComment])
    // const paintingWithNewComment = paintings.filter(painting => painting.id === newComment.painting_id)
    // paintingWithNewComment[comments] = [...comments, newComment]
  }

  // updates comments when an edit is made
  function onEditComment(revisedComment) {
    const updatedComments = comments.map(comment => {
      return comment.id === revisedComment.id ? revisedComment : comment
    })
    setComments(updatedComments)
  }

  // deltes comment
  function onDeleteComment(deletedComment) {
    const updatedComments = comments.filter(comment => {
      return comment.id !== deletedComment.id
    })
    setComments(updatedComments)
  }

  // updated account information of current user
  function onEditAccountInfo(updatedUserInfo) {
    console.log(updatedUserInfo)
    currentUser["name"] = updatedUserInfo.name 
    currentUser["username"] = updatedUserInfo.username
    currentUser["email"] = updatedUserInfo.email
  }

  // sets search value to what user typed in
  function filterSearch(value) {
    setSearchTerm(value)
  }

  // filtered array of paintings matching what user searched for
  const filteredPaintings = paintings.filter(painting => painting.name.toLowerCase().includes(searchTerm.toLowerCase()) || painting.artist.name.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <BrowserRouter>
      <div className="body">
        <Switch>
          <Route path="/mygallery">
            {!currentUser ? <Login onLogin={onLogin}/> :
              <>
                <Header />
                <MyGallery 
                  favorites={favorites} 
                  user={currentUser} 
                  paintings={favoritePaintings()} // this is the actual painting instances, not favorite instances (diff models)
                  favPaintings={favoritePaintings()} // used to check state of painting in ArtList and ArtCard
                  onAddFavPainting={onAddFavPainting} 
                  onRemoveFavPainting={onRemoveFavPainting}
                  onPublishComment={onPublishComment}
                  onEditComment={onEditComment}
                  onDeleteComment={onDeleteComment}/>
              </>
            }
          </Route>
          <Route path="/profile">
            {!currentUser ? <Login onLogin={onLogin}/> :
              <>
                <Header />
                <Profile 
                  onLogout={onLogout}
                  user={currentUser}
                  onEditAccountInfo={onEditAccountInfo}/>
              </>
            }
          </Route>
          <Route path="/">
            {!currentUser ?
              <>
                <Route path='/login'>
                  <Login onLogin={onLogin}/>
                </Route>
              </>
              :
              <>
                <Header />
                <Homepage 
                  user={currentUser} 
                  paintings={filteredPaintings} 
                  favorites={favorites} 
                  favPaintings={favoritePaintings()} 
                  onAddFavPainting={onAddFavPainting} 
                  onRemoveFavPainting={onRemoveFavPainting}
                  onPublishComment={onPublishComment}
                  onEditComment={onEditComment}
                  onDeleteComment={onDeleteComment}
                  searchTerm={searchTerm}
                  filterSearch={filterSearch}/>
              </>
            }
          </Route>
        </Switch>
        <Route path='/deleteaccount'>
          <Header />
          <DeleteAccount user={currentUser}/>
        </Route>
        <Route path='/signup'>
          <Signup onLogin={onLogin}/>
        </Route>
        {/* <Route path='/login'>
          <Login onLogin={onLogin}/>
        </Route> */}

      </div>
    </BrowserRouter>
  );
}

export default App;