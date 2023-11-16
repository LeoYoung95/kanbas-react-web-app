import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {FaCheck, FaEllipsisV} from "react-icons/fa"; // Import the needed icons
import {useSelector, useDispatch} from "react-redux";
import {
    updateAssignment_reducer,
    setCurrentAssignment_reducer,
    resetCurrentAssignment_reducer
} from "../assignmentsReducer";
import {updateAssignment} from "../client";


function AssignmentEditor() {
    const {courseId} = useParams();
    const navigate = useNavigate();

    // initialize the assignment
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();


    const handleSave = () => {
        updateAssignment(courseId, assignment).then(status => {
            if (status === 204) {
                dispatch(updateAssignment_reducer(assignment));
                dispatch(resetCurrentAssignment_reducer());
                navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            }
        });
    };


    return (
        <div>
            <div className="d-flex justify-content-end align-items-center border-bottom padding-bottom-10">
                <div className="me-2">
                    <FaCheck className="text-success"/>
                    <span style={{color: "green", fontWeight: "bold"}}> Published</span>
                </div>
                <div className="button-group">
                    <button className="btn btn-lightgrey custom-btn-height">
                        <FaEllipsisV/>
                    </button>
                </div>
            </div>

            <div className=' border-bottom'>
                <h5 className='padding-top-20'>Assignment Name</h5>
                <input value={assignment.title} className="form-control"
                       onChange={(e) => dispatch(setCurrentAssignment_reducer({...assignment, title: e.target.value}))}/>
            </div>

            <div className=' border-bottom'>
                <h5 className='padding-top-20'>Assignment Due Date</h5>
                <input value={assignment.dueDate} className="form-control" type="date"
                       onChange={(e) => dispatch(setCurrentAssignment_reducer({...assignment, dueDate: e.target.value}))}/>
            </div>

            <div className=' border-bottom'>
                <h5 className='padding-top-20'>Assignment Points</h5>
                <input value={assignment.points} className="form-control" type="number"
                       onChange={(e) => dispatch(setCurrentAssignment_reducer({...assignment, points: e.target.value}))}/>
            </div>

            <div className='d-flex justify-content-end padding-bottom-10 border-bottom padding-top-20'>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success me-2">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AssignmentEditor;
