import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaTachometerAlt, FaBook, FaCalendarAlt, FaEnvelope, FaHistory, FaDesktop, FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import './index.css';
import logo from '../Images/NU-icon.png';

function KanbasNavigation() {
    const links = [
        { name: 'Account', icon: <FaUser size={24} /> },
        { name: 'Dashboard', icon: <FaTachometerAlt size={24} /> },
        { name: 'Courses', icon: <FaBook size={24} /> },
        { name: 'Calendar', icon: <FaCalendarAlt size={24} /> },
        { name: 'Inbox', icon: <FaEnvelope size={24} /> },
        { name: 'History', icon: <FaHistory size={24} /> },
        { name: 'Studio', icon: <FaDesktop size={24} /> },
        { name: 'Commons', icon: <FaGlobe size={24} /> },
        { name: 'Help', icon: <FaQuestionCircle size={24} /> },
    ];
    const { pathname } = useLocation();

    return (
        <div id="kanbas-sidebar-container">
            <img src={logo} alt="Kanbas Logo" id="kanbas-sidebar-logo"/>
            <nav id="kanbas-sidebar" className="bg-black">
                <ul className="list-unstyled components">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={`/Kanbas/${link.name}`}
                                className={`${pathname.includes(link.name) ? "active" : ""}`}>
                                <span>
                                    {link.icon}
                                </span>
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default KanbasNavigation;
