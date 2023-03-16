import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Search from './Search.js'
import ArtList from './ArtList'

function Homepage({ currentUser, paintings }) {

    console.log(currentUser)

    return (
        <div>
            <h1>homepage</h1>
            <h2>hello, {currentUser}</h2>
            <Search />
            <ArtList currentUser={currentUser} paintings={paintings}/>
        </div>
    )
}

export default Homepage;