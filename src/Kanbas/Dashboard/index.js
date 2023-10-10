import React from 'react';
import { Link } from "react-router-dom";
import db from "../Database";
import '../index.css';
import sampleImage from '../Images/react.png';

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    return `${year}${month}`;
}

function Dashboard() {
    const courses = db.courses;
    return (
        <div className='courses-container'>
            <h1 className="main-title-dashboard">Dashboard</h1>
            <h3 className="main-sub-title">Published Courses (8)</h3>

            <div className="courses-grid d-flex flex-wrap col-9">
                {courses.map((course) => (
                    <div className="col" key={course._id}>
                        <div className="card course-card">
                            <img src={sampleImage} style={{height: '150px'}} className="card-img-top" alt="Course" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/Kanbas/Courses/${course._id}`}>
                                        {course.number} {course.name}
                                    </Link>
                                </h5>
                                <p className="card-text">{course.number}.{course._id}.{formatDate(course.startDate)}</p>
                                <p className="card-text" style={{fontSize: '0.8em'}}>{course.startDate}_{course.endDate} Semester Full Term</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
