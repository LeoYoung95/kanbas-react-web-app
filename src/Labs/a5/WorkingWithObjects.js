import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const URL = "http://localhost:4000/a5/assignment";
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);



    return (
        <div>
            <h3>Working With Objects</h3>

            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment"
               className="btn btn-primary me-2">
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4>
            <a
                href="http://localhost:4000/a5/assignment/title"
                className="btn btn-primary me-2">
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Title
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment,
                    title: e.target.value })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text" />

            <h4>Modifying Properties - Extra Credit</h4>
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Score
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment,
                    score: e.target.value })}
                value={assignment.score}
                className="form-control mb-2 w-75"
                type="text" />

            <a
                href={`${URL}/completed/${assignment.completed}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Complete Status
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment,
                    completed: e.target.value })}
                value={assignment.completed}
                className="form-control mb-2 w-75"
                type="text" />

            <h4>Exercises</h4>
            <h5>Retrieving Objects</h5>
            <a href="http://localhost:4000/a5/assignment"
               className="btn btn-primary me-2">
                Get Assignment
            </a>

            <h5>Retrieve more object properties</h5>
            <a
                href="http://localhost:4000/a5/assignment/score"
                className="btn btn-primary me-2">
                Get Score
            </a>
            <a
                href="http://localhost:4000/a5/assignment/completed"
                className="btn btn-primary me-2">
                Get Complete Status
            </a>

            <h5>Update more object properties</h5>
            <a
                href={`${URL}/due/${assignment.due}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Due Date (Use format YYYY-MM-DD)
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment,
                    due: e.target.value })}
                value={assignment.due}
                className="form-control mb-2 w-75"
                type="text" />

            <h4>Fetch & Update Using Axios</h4>

            <input
                onChange={(e) => setAssignment({ ...assignment,
                    title: e.target.value })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text" />
            <button onClick={updateTitle}
                    className="w-100 btn btn-primary mb-2">
                Update Title to: {assignment.title}
            </button>

            <button onClick={fetchAssignment}
                    className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button>
            <div className="border-bottom">
                <h5>ID: {assignment.id}</h5>
                <h5>Title: {assignment.title}</h5>
                <h5>Description: {assignment.description}</h5>
                <h5>Due: {assignment.due}</h5>
                <h5>Completed: {assignment.completed}</h5>
                <h5>Score: {assignment.score}</h5>
            </div>



        </div>
    );
}
export default WorkingWithObjects;

