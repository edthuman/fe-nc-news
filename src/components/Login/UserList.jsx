import "./UserList.css"

function UserList({ users }) {
    const orderedUsernames = users.map((user) => user.username).toSorted();
    return (
        <>
            <p>Here are all of our users:</p>
            <ol id="user-list">
                {orderedUsernames.map((username) => {
                    return <li key={username}>{username}</li>;
                })}
            </ol>
        </>
    );
}

export default UserList;
