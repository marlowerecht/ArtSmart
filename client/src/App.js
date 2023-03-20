import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';
import Homepage from './components/Homepage.js';
import Profile from './components/Profile.js';
import Header from './components/Header.js';
import MyGallery from './components/MyGallery.js'
import BucketList from "./components/BucketList.js";
import SeenArt from "./components/SeenArt.js";

function App() {
  //state
  const [ currentUser, setCurrentUser ] = useState(null)
  const [ paintings, setPaintings ] = useState([])
  const [ favorites, setFavorites ] = useState([])
  const [ comments, setComments ] = useState([])  

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
        res.json().then((paintings) => setPaintings(paintings))
      }
    })
  },[])

  // fetches all favorites
  useEffect(() => {
    fetch('/favorites')
    .then(res => {
      if(res.ok) {
        res.json().then((favorites) => setFavorites(favorites))
      }
    })
  },[])

  // fetches all comments
  useEffect(() => {
    fetch('/comments')
    .then(res => {
      if(res.ok) {
        res.json().then((comments) => setComments(comments))
      }
    })
  },[])

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
  function findUserFavs() {
    // make array of favorites that belong to current user
    const favoritesAndUserIDs = favorites.filter(favorite => favorite.user_id === currentUser.id)
    // make array of the IDs of the paintings that are favorited by the current user
    const favoritesAndPaintingsIDs = favoritesAndUserIDs.map(favorite => favorite.painting_id)
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
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/homepage">
            <Header />
            <Homepage 
              user={currentUser} 
              paintings={paintings} 
              favorites={favorites} 
              favPaintings={findUserFavs()} 
              onAddFavPainting={onAddFavPainting} 
              onRemoveFavPainting={onRemoveFavPainting}
              onPublishComment={onPublishComment}/>
          </Route>
          <Route path="/mygallery">
            <Header />
            <MyGallery 
              favorites={favorites} 
              user={currentUser} 
              galleryPaintings={findUserFavs()} 
              favPaintings={findUserFavs()} 
              onAddFavPainting={onAddFavPainting} 
              onRemoveFavPainting={onRemoveFavPainting}
              onPublishComment={onPublishComment}/>
          </Route>
          <Route path="/bucketlist">
            <Header />
            <BucketList paintings={paintings}/>
          </Route>
          <Route path="/seenart">
            <Header />
            <SeenArt paintings={paintings}/>
          </Route>
          <Route path="/profile">
            <Header />
            <Profile onLogout={onLogout}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;