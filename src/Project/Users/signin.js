import * as client from "./client";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await client.signin(credentials);
        navigate("/project/account");
    };

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control"
                           type="text"
                           id="username"
                           name="username"
                           value={credentials.username}
                           onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control"
                           type="password"
                           id="password"
                           name="password"
                           value={credentials.password}
                           onChange={handleChange}
                    />
                </div>
                <div className="padding-top-20">
                    <button className="btn btn-primary" type="submit">
                        Sign In
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Signin;
