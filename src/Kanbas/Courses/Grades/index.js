import db from "../../Database";
import {useParams} from "react-router-dom";
import { FaUpload, FaDownload, FaCog, FaFilter } from 'react-icons/fa';
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";



function Grades() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="d-flex justify-content-end">
                <div className="button-group">
                    <button className="btn btn-secondary custom-btn-height" style={{ marginRight: '5px' }}>
                        <FaUpload className="icon-spacing" /> Import
                    </button>
                    <div className="btn-group">
                        <Dropdown show={isDropdownOpen} onToggle={(isOpen) => setIsDropdownOpen(isOpen)}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                <FaDownload className="icon-spacing" /> Export
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Option 1</Dropdown.Item>
                                <Dropdown.Item href="#">Option 2</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <button className="btn btn-secondary custom-btn-height">
                        <FaCog />
                    </button>
                </div>
            </div>



            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="searchStudents"><h5>Student Names</h5></label>
                    <input
                        type="text"
                        id="searchStudents"
                        className="form-control"
                        title="Type the name of the student to search for"
                        placeholder="Search Students"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="searchAssignments"><h5>Assignment Names</h5></label>
                    <input
                        type="text"
                        id="searchAssignments"
                        className="form-control"
                        title="Type the name of the assignment to search for"
                        placeholder="Search Assignments"
                    />
                </div>
            </div>

            <div className="row mt-1 padding-bottom-10">
                <div className="col-12">
                    <button className="btn btn-secondary">
                        <FaFilter /> Apply Filters
                    </button>
                </div>
            </div>


            <div className="table-responsive padding-top-20">
                <table className="table">
                    <thead>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td>{grade?.grade || ""}</td>);
                                })}
                            </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        </div>);
}

export default Grades;


