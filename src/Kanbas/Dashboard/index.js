import {React, useState} from "react";
import {Link} from "react-router-dom";
import db from "../Database";
import '../index.css';
import sampleImage from '../Images/react.png';

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    return `${year}${month}`;
}

function Dashboard({
                       courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse
                   }
) {


    return (
        <div className='courses-container'>
            <h1 className="main-title-dashboard">Dashboard</h1>

            <div className="row col-9 justify-content-end padding-bottom-10">

                <div className="col-7">
                    <h5>Course</h5>
                    <input value={course.name} className="form-control"
                           onChange={(e) => setCourse({...course, name: e.target.value})}/>
                    <input value={course.number} className="form-control"
                           onChange={(e) => setCourse({...course, number: e.target.value})}/>
                    <input value={course.startDate} className="form-control" type="date"
                           onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                    <input value={course.endDate} className="form-control" type="date"
                           onChange={(e) => setCourse({...course, endDate: e.target.value})}/>

                </div>
                <div className="col-4">
                    <button className={"btn btn-primary"} onClick={updateCourse}>
                        Update
                    </button>

                    <button className={"btn btn-success"} onClick={addNewCourse}>
                        Add
                    </button>

                </div>
            </div>

            <h3 className="main-sub-title">Published Courses</h3>

            <div className="courses-grid d-flex flex-wrap col-9">
                {courses.map((course) => (
                    <div className="col" key={course._id}>
                        <div className="card course-card">
                            <img src={sampleImage} style={{height: '150px'}} className="card-img-top" alt="Course"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/Kanbas/Courses/${course._id}`}>
                                        {course.number} {course.name}
                                    </Link>
                                </h5>

                                <button className={"btn btn-primary"}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                    Edit
                                </button>


                                <button className={"btn btn-danger"}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                    Delete
                                </button>

                                <p className="card-text">{course.number}.{course._id}.{formatDate(course.startDate)}</p>
                                <p className="card-text"
                                   style={{fontSize: '0.8em'}}>{course.startDate}_{course.endDate} Semester Full
                                    Term</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
