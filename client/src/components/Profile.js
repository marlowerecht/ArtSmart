import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DeleteAccount from './DeleteAccount.js';

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
            <h1>profile</h1>
            <button onClick={handleLogoutClick}>Logout</button>
            <DeleteAccount />
        </div>
    )
}

export default Profile;