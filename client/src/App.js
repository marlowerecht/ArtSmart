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
  const [ currentUser, setCurrentUser ] = useState(null)
  const [ paintings, setPaintings ] = useState([])

  // fetches data of current user
  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  },[])

  console.log(currentUser)

  // fetches paintings
  // useEffect(() => {
  //   fetch('/paintings')
  //   .then(res => {
  //     if(res.ok) {
  //       res.json().then(paintings => setPaintings(paintings))
  //     }
  //   })
  // },[])

  // sets current user to logged in user
  function onLogin(user) {
    setCurrentUser(user)
  }

  // logs out user
  function onLogout() {
    setCurrentUser(null)
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
            <Homepage user={currentUser}/>
          </Route>
          <Route path="/mygallery">
            <Header />
            <MyGallery />
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