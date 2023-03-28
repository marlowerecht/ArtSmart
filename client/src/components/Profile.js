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
        <div className="flex-col h-screen">
            <h3 className="m-6 text-lg flex justify-center">a c c o u n t - i n f o</h3>
            <div className="flex justify-center items-center">
                <div className="text-amber-900 shadow-md rounded m-4 bg-orange-200 w-1/3 p-2 flex-col">
                    <div className="profile-info-div flex justify-center">
                        <p className="profile-info-label">name:</p><p className="profile-info">{name}</p>
                    </div>

                    <div className="profile-info-div flex justify-center">
                        <p className="profile-info-label">username:</p><p className="profile-info">{username}</p>
                    </div>
                    <div className="flex justify-center profile-info-div">
                        <p className="profile-info-label">email:</p><p className="profile-info">{email}</p>
                    </div>
                </div>
                </div>
                    <div className="flex justify-center">
                        {viewingEditForm ? <EditAccountForm 
                                                user={user} 
                                                wrapViewingEditFormSetterFunction={wrapViewingEditFormSetterFunction} onEditAccountInfo={onEditAccountInfo}
                                            /> : <button onClick={handleEditInformation} className="profile-btn mx-4">edit information</button>}
                    </div>

                    <div className="flex justify-center">
                        <button onClick={handleLogoutClick} className="profile-btn">logout</button>
                    </div>

             <div className="flex justify-end m-4">
                <button onClick={sendToDeleteAccount} className="profile-btn">delete account</button>
            </div>  

        </div>
    )
}

export default Profile;