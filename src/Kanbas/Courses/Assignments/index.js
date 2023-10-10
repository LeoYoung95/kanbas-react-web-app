import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import {FaGripVertical, FaBook, FaCheck, FaPlus, FaEllipsisV} from "react-icons/fa"; // Importing FontAwesome icons

function Assignments() {
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div>
            <div className="d-flex justify-content-between padding-bottom-10 border-bottom">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for Assignments"
                />
                <div className="button-group">
                    <button
                        className="btn btn-secondary custom-btn-height"
                        style={{marginRight: '5px'}}
                    >
                        <FaPlus/> Group
                    </button>
                    <button
                        className="btn btn-danger custom-btn-height"
                        style={{marginRight: '5px'}}
                    >
                        <FaPlus/> Assignment
                    </button>
                    <button
                        className="btn btn-secondary custom-btn-height"
                    >
                        <FaEllipsisV/>
                    </button>
                </div>
            </div>

            <div className="list-group padding-top-20">
                <div className="list-group-item list-group-item-secondary">
                    <div className="row align-items-center">
                        <div className="col-md-8 align-items-center">
                            <h5>ASSIGNMENTS</h5>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end align-items-center">
                            <button className="btn btn-secondary me-3 rounded">
                                40% of Total
                            </button>
                            <FaEllipsisV className="me-3"/>
                            <FaPlus className="me-3"/>
                        </div>
                    </div>
                </div>


                {courseAssignments.map((assignment) => (
                    <div key={assignment._id} className="list-group-item pl-4">
                        <div className="row align-items-center">
                            <div className="col col-1">
                                <FaGripVertical className="me-1" size="1em"/>
                                <FaBook style={{color: '#0f5132'}} size="1em"/>
                            </div>
                            <div className="col col-md-10">
                                <h5>
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                        {assignment.title}
                                    </Link>
                                </h5>
                                Multiple Modules | Due {assignment.dueDate} | {assignment.points} pts
                            </div>
                            <div className="col col-md-1 text-end">
                                <div className="icon-group">
                                    <FaCheck className="text-success" size="1em"/>
                                    <FaEllipsisV size="1em"/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
