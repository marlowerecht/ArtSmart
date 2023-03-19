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

  //MY GALLERY PAINTINGS
  // returns array of paintings that the current user has favorited
  function findUserFavs() {
    const favoritesAndUserIDs = favorites.filter(favorite => favorite.user_id === currentUser.id)
    const favoritesAndPaintingsIDs = favoritesAndUserIDs.map(favorite => favorite.id)
    const favs = paintings.filter(painting => {
      return favoritesAndPaintingsIDs.includes(painting.id)})
    return favs
  }

  // sets current user to logged in user
  function onLogin(user) {
    setCurrentUser(user)
  }

  // logs out user
  function onLogout() {
    setCurrentUser(null)
  }

  // console.log(favorites)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/homepage">
            <Header />
            <Homepage user={currentUser} paintings={paintings} favorites={favorites} favPaintings={findUserFavs()}/>
          </Route>
          <Route path="/mygallery">
            <Header />
            <MyGallery favorites={favorites} user={currentUser} galleryPaintings={findUserFavs()} favPaintings={findUserFavs()}/>
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