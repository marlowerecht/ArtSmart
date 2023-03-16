import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Search from './Search.js'
import ArtList from './ArtList'

function Homepage() {
    return (
        <div>
            <h1>homepage</h1>
            <Search />
            <ArtList />
        </div>
    )
}

export default Homepage;