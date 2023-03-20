import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from './Header.js';
import DeleteAccount from './DeleteAccount.js';
import EditAccountForm from './EditAccountForm.js'

function Profile({ onLogout, user, onEditAccountInfo }) {
    const history = useHistory()

    const [ viewingEditForm, setViewingEditForm ] = useState(false)

    console.log(user)

    //attributes of current user
    const { name, username, email } = user

    //logs user out
    function handleLogoutClick() {
        fetch ('/logout', {
            method: 'DELETE',
        })
        .then(res => {
            if(res.ok) {
                onLogout()
                history.push('/login')
                }
            }
        )}

    // sends users to DeleteAccount to make sure they want to delete it
    function sendToDeleteAccount() {
        history.push('/deleteaccount')
    }

    // shows account information edit form
    function handleEditInformation() {
        setViewingEditForm(true)
    }

    //wrapper function to pass down setter function
    function wrapViewingEditFormSetterFunction(value) {
        setViewingEditForm(value)
    }

    return (
        <div>
            <h1>profile</h1>

            <h3>account information</h3>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            
            {viewingEditForm ? <EditAccountForm 
                                    user={user} 
                                    wrapViewingEditFormSetterFunction={wrapViewingEditFormSetterFunction} onEditAccountInfo={onEditAccountInfo}
                                /> : <button onClick={handleEditInformation}>edit information</button>}
            
            <button onClick={handleLogoutClick}>logout</button>
            
            <button onClick={sendToDeleteAccount}>delete account</button>
        </div>
    )
}

export default Profile;