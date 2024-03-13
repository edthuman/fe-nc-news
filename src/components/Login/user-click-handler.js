function handleLoginAttempt(
    e,
    username,
    users,
    setHasAttemptedLogin,
    setIsLoginAttemptValid,
    setUser,
    setUsernameInput
) {
    e.preventDefault();
    setHasAttemptedLogin(true);
    users.forEach((user) => {
        if (user.username === username) {
            setIsLoginAttemptValid(true);
            setUser(username);
            setUsernameInput("");
        }
    });
}

function handleLogOut(setUser) {
    setUser("guest")
}

export { handleLoginAttempt, handleLogOut };
