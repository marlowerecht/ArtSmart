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

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  function onLogin(user) {
    setCurrentUser(user)
  }

  function onLogout() {
    setCurrentUser(null)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            {/* {!currentUser ? <Login onLogin={onLogin} /> : <Homepage />} */}
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/homepage">
            <Header />
            <Homepage currentUser={currentUser}/>
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