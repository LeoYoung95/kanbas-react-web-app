import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as client from "./client";

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}

            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control"
                       value={credentials.username}
                       onChange={(e) => setCredentials({
                           ...credentials,
                           username: e.target.value
                       })}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control"
                       value={credentials.password}
                       onChange={(e) => setCredentials({
                           ...credentials,
                           password: e.target.value
                       })}/>
            </div>

            <div className="padding-top-20">
                <button className="btn btn-primary" onClick={signup}>
                    Signup
                </button>
            </div>


        </div>
    );
}

export default Signup;

