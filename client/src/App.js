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
  const [ currentUser, setCurrentUser ] = useState('')
  const [ paintings, setPaintings ] = useState([])

  // fetches data of current user
  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok) {
        res.json().then(user => console.log(user))
      }
    })
  },[])

  // fetches paintings
  useEffect(() => {
    fetch('/paintings')
    .then(res => {
      if(res.ok) {
        res.json().then(paintings => setPaintings(paintings))
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

  console.log(currentUser)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/homepage">
            <Header />
            <Homepage paintings={paintings}/>
          </Route>
          <Route path="/mygallery">
            <Header />
            <MyGallery currentUser={currentUser}/>
          </Route>
          <Route path="/bucketlist">
            <Header />
            <BucketList />
          </Route>
          <Route path="/seenart">
            <Header />
            <SeenArt />
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