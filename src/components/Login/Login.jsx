import { useEffect, useState } from "react";
import "./Login.css";
import { getAllUsers } from "../../api";
import { handleLogOut, handleLoginAttempt } from "./user-click-handler";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { Link } from "react-router-dom";

function Login() {
    const [users, setUsers] = useState([]);
    const [isLoginLoading, setIsLoginLoading] = useState(true);
    const [usernameInput, setUsernameInput] = useState("");
    const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
    const [isLoginAttemptValid, setIsLoginAttemptValid] = useState(false);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        getAllUsers().then((returnedUsers) => {
            setUsers(returnedUsers);
            setIsLoginLoading(false);
        });
    }, []);

    return isLoginLoading ? (
        <Loading />
    ) : (
        <>
            <Link to="/" className="back-link">
                {"<<Back to all articles"}
            </Link>
            {user === "guest" ? (
                <div id="login-page">
                    <h2>
                        {user === "guest"
                            ? "Log in"
                            : `You're logged in, ${user}`}
                        !
                    </h2>
                    <form
                        onSubmit={(e) =>
                            handleLoginAttempt(
                                e,
                                usernameInput,
                                users,
                                setHasAttemptedLogin,
                                setIsLoginAttemptValid,
                                setUser,
                                setUsernameInput
                            )
                        }
                    >
                        <label htmlFor="username-input">
                            Please type your username:
                        </label>
                        <input
                            type="text"
                            id="username-input"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                        />
                        <button>Log In</button>
                    </form>
                    {hasAttemptedLogin && !isLoginAttemptValid ? (
                        <>
                            <p>User not found</p>
                            <p>
                                Please double check your username and try again
                            </p>
                        </>
                    ) : null}
                </div>
            ) : (
                <div id="logged-in-message">
                    <p>You're logged in as {user}</p>
                    <button onClick={() => handleLogOut(setUser)}>
                        Log Out
                    </button>
                </div>
            )}
        </>
    );
}

export default Login;
