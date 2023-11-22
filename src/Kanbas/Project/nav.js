import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

function Nav() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active" : "";


    return (
        <nav>
            <ul>
                <li>
                    <Link to="/project/home" className={location.pathname === "/project/home" ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/project/search" className={location.pathname === "/project/search" ? "active" : ""}>
                        Search
                    </Link>
                </li>
                <li>
                    <Link to="/project/signin" className={location.pathname === "/project/signin" ? "active" : ""}>
                        Sign-In
                    </Link>
                </li>
                <li>
                    <Link to="/project/signup" className={location.pathname === "/project/signup" ? "active" : ""}>
                        Sign-Up
                    </Link>
                </li>
                <li>
                    <Link to="/project/account" className={isActive("/project/account")}>
                        Account
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
