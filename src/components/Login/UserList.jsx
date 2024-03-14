function UserList({ users }) {
    const orderedUsernames = users.map((user) => user.username).toSorted();
    return (
        <div>
            <p>Here are all of our users:</p>
            <ol>
                {orderedUsernames.map((username) => {
                    return <li key={username}>{username}</li>;
                })}
            </ol>
        </div>
    );
}

export default UserList;
