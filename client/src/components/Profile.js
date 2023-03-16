import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Profile({ onLogout }) {
    const history = useHistory()

    function handleLogoutClick() {
        fetch ('/logout', {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok) {
                onLogout(null)
                history.push('/login')
                }
            }
        )}
    

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    )
}

export default Profile;