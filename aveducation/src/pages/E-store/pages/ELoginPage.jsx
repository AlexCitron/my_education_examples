import {Link, useNavigate} from "react-router-dom";

export default function ELoginPage() {

    const navigate = useNavigate();

    return (
        <div className={'login-page'}>
            <h2>Login Page</h2>
            <Link to="/" state={{login: "You are logged in"}} >
                <button>Log In</button>
            </Link>
            <button onClick={() => navigate("/", {state: {login: "You are not logged in"}})}>Forgot login data</button>
        </div>
    )
}