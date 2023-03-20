function Comment({ comment }) {

    const { content, user } = comment

    return (
        <div>
            <p>{content}</p>
            <p>{user.username}</p>
        </div>
    )
}

export default Comment;