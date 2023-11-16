import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaComments, FaVideo, FaTasks, FaFileAlt, FaGraduationCap, FaUsers, FaBullhorn, FaFile, FaFolder, FaClipboard, FaChartBar, FaHandshake, FaCog } from 'react-icons/fa';
import '../../index.css';
function CourseNavigation({ showIcons = false }) {
    const links = [
        { name: 'Home', icon: <FaHome /> },
        { name: 'Modules', icon: <FaBook /> },
        { name: 'Piazza', icon: <FaComments /> },
        { name: 'Zoom Meetings', urlName: 'ZoomMeetings', icon: <FaVideo /> },
        { name: 'Assignments', icon: <FaTasks /> },
        { name: 'Quizzes', icon: <FaFileAlt /> },
        { name: 'Grades', icon: <FaGraduationCap /> },
        { name: 'People', icon: <FaUsers /> },
        { name: 'Panopto Video', urlName: 'PanoptoVideo', icon: <FaVideo /> },
        { name: 'Discussions', icon: <FaComments /> },
        { name: 'Announcements', icon: <FaBullhorn /> },
        { name: 'Pages', icon: <FaFile /> },
        { name: 'Files', icon: <FaFolder /> },
        { name: 'Rubrics', icon: <FaClipboard /> },
        { name: 'Outcomes', icon: <FaChartBar /> },
        { name: 'Collaborations', icon: <FaHandshake /> },
        { name: 'Syllabus', icon: <FaFileAlt /> },
        { name: 'Settings', icon: <FaCog /> }
    ];

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="second-sidebar">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={`/Kanbas/Courses/${courseId}/${link.urlName || link.name}`}
                            className={`list-group-item ${pathname.includes(link.urlName || link.name) && "active"}`}>
                            {showIcons && <span style={{ marginRight: '8px' }}>{link.icon}</span>}
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default CourseNavigation;
