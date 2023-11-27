import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./project_nav.css";
function ProjectNav() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "project-nav-active" : "";

    return (
        <nav className="project-nav">
            <ul>
                <li><Link to="/project/home" className={isActive("/project/home")}>Home</Link></li>
                <li><Link to="/project/search" className={isActive("/project/search")}>Search</Link></li>
                <li><Link to="/project/signin" className={isActive("/project/signin")}>Sign-In</Link></li>
                <li><Link to="/project/signup" className={isActive("/project/signup")}>Sign-Up</Link></li>
                <li><Link to="/project/account" className={isActive("/project/account")}>Account</Link></li>
            </ul>
        </nav>
    );
}

export default ProjectNav;
