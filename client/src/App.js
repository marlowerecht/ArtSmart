import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';
import Homepage from './components/Homepage.js';
import Profile from './components/Profile.js'

function App() {
  const [ currentUser, setCurrentUser ] = useState('')

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  function onLogin(user) {
    setCurrentUser(user)
    console.log(user)
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
            <Homepage />
          </Route>
          <Route path="/profile">
            <Profile onLogout={onLogout}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;