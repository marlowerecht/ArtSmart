import { useHistory } from "react-router-dom";

function DeleteAccount({ user }) {
    const history = useHistory()

    function handleDeleteAccount() {
        fetch(`/users/${user.id}`, {
            method: 'DELETE'
        })
        .then(history.push('/login'))
    }

    function handleNevermind() {
        history.push('/homepage')
    }

    return (
        <div>
            <h1>are you sure you want to delete you account?</h1>
            <button onClick={handleDeleteAccount} className="profile-btn">yes, delete account</button>
            <button onClick={handleNevermind} className="profile-btn">nevermind, back to the art!</button>
        </div>
    )
}

export default DeleteAccount;