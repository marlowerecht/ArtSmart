import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Search from './Search.js'
import ArtList from './ArtList'

function Homepage({ user, paintings }) {

    console.log(user)

    return (
        <div>
            <h1>homepage</h1>
            {user ? <h2>hello, {user.name}</h2> : <h2>loading...</h2>}
            <Search />
            <ArtList user={user} paintings={paintings}/>
        </div>
    )
}

export default Homepage;