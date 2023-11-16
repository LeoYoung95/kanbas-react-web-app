import React from "react";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {FaGripVertical, FaBook, FaCheck, FaPlus, FaEllipsisV} from "react-icons/fa"; // Importing FontAwesome icons
import {useSelector, useDispatch} from "react-redux";
import {setAssignments_reducer, addAssignment_reducer, updateAssignment_reducer, deleteAssignment_reducer, setCurrentAssignment_reducer, resetCurrentAssignment_reducer } from "./assignmentsReducer";
import {findAllAssignments, addNewAssignment, updateAssignment, deleteAssignment} from "./client";

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${date.getDate()}`;
}


function Assignments() {
    const {courseId} = useParams();


    // initialize the assignments
    useEffect(() => {
        findAllAssignments(courseId).then((assignments) =>
            dispatch(setAssignments_reducer(assignments))
        );
        console.log("re-render assignments")
    }, [courseId]);


    const assignments = useSelector((state) => state.assignmentsReducer.assignments);

    // initialize the assignment
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const dispatch = useDispatch();

    const handleAddAssignment = () => {
        addNewAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment_reducer(assignment));
        });

    }

    const handleDeleteAssignment = (assignmentId) => {
        deleteAssignment(courseId, assignmentId).then((status) => {
            dispatch(deleteAssignment_reducer(assignmentId));
        });
    }

    const handleUpdateAssignment = async () => {
        const status = await updateAssignment(courseId, assignment);
        dispatch(updateAssignment_reducer(assignment));
        dispatch(resetCurrentAssignment_reducer());
    }


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

            <div className="row col-9 justify-content-end padding-bottom-10">

                <div className="col-7 padding-top-20">
                    <h5>Assignment</h5>
                    <input value={assignment.title} className="form-control"
                           onChange={(e) => dispatch(setCurrentAssignment_reducer({...assignment, title: e.target.value}))}/>
                    <input value={assignment.dueDate} className="form-control" type="date"
                           onChange={(e) => dispatch(setCurrentAssignment_reducer({...assignment, dueDate: e.target.value}))}/>
                    <input value={assignment.points} className="form-control" type="number"
                           onChange={(e) => dispatch(setCurrentAssignment_reducer({...assignment, points: e.target.value}))}/>

                </div>
                <div className="col-4 padding-top-20">
                    <button className={"btn btn-primary"} onClick={handleUpdateAssignment}>
                        Update
                    </button>

                    <button className={"btn btn-success"} onClick={handleAddAssignment}>
                        Add
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


                {assignments.map((assignment) => (
                    console.log('Rendering assignment:', assignment.title),
                    <div key={assignment._id} className="list-group-item pl-4">
                        <div className="row align-items-center">
                            <div className="col col-1">
                                <FaGripVertical className="me-1" size="1em"/>
                                <FaBook style={{color: '#0f5132'}} size="1em"/>
                            </div>
                            <div className="col col-md-10">
                                <div className="row">
                                    <div className="col col-md-8">
                                        <h5>
                                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                  onClick={() => dispatch(setCurrentAssignment_reducer(assignment))}>
                                                {assignment.title}
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="col">
                                        <button className={"btn btn-danger"}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    handleDeleteAssignment(assignment._id);
                                                }}>
                                            Delete
                                        </button>
                                        <button className={"btn btn-success"}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(setCurrentAssignment_reducer(assignment));
                                                }}>
                                            Edit
                                        </button>
                                    </div>
                                </div>


                                Multiple Modules | Due {formatDate(assignment.dueDate)} | {assignment.points} pts
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
