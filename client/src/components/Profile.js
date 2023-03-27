import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from './Header.js';
import DeleteAccount from './DeleteAccount.js';
import EditAccountForm from './EditAccountForm.js'

function Profile({ onLogout, user, onEditAccountInfo }) {
    const history = useHistory()

    const [ viewingEditForm, setViewingEditForm ] = useState(false)

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
            <h3 className="text-xl">account information</h3>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            
            {viewingEditForm ? <EditAccountForm 
                                    user={user} 
                                    wrapViewingEditFormSetterFunction={wrapViewingEditFormSetterFunction} onEditAccountInfo={onEditAccountInfo}
                                /> : <button onClick={handleEditInformation} className="profile-btn">edit information</button>}
            
            <button onClick={handleLogoutClick} className="profile-btn">logout</button>
            
            <button onClick={sendToDeleteAccount} className="profile-btn">delete account</button>
        </div>
    )
}

export default Profile;