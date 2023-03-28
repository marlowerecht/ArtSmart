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
        history.push('/')
    }

    return (
        <div className="h-screen flex-col">
            <div className="bg-orange-200 rounded shadow-md mx-96 my-12 py-10">
                <h1 className="flex justify-center m-4 text-md">are you sure you want to delete your account?</h1>

                <div className="flex justify-center m-4">
                    <button onClick={handleDeleteAccount} className="profile-btn">yes, delete account</button>
                    <button onClick={handleNevermind} className="profile-btn">nevermind, back to the art!</button>
                </div>
            </div>

        </div>
    )
}

export default DeleteAccount;