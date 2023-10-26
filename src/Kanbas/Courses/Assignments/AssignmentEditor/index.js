import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import {FaCheck, FaEllipsisV} from "react-icons/fa"; // Import the needed icons

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
                <input value={assignment.title} className="form-control mb-2"/>
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
