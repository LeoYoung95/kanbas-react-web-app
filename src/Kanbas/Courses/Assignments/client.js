import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const URL = `${API_BASE}/assignments`;

export const findAllAssignments = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    console.log("findAll-response.data:",response.data)
    return response.data;
};
export const getCertainAssignment = async (courseId, assignmentId) => {
    const response = await axios.get(`${URL}/${courseId}/${assignmentId}`);
    return response.data;
};

export const addNewAssignment = async (courseId, assignment) => {
    const response = await axios.post(`${URL}/${courseId}`, assignment);
    return response.data;
};

export const updateAssignment = async (courseId, assignment) => {
    const response = await axios.put(
        `${URL}/${courseId}/${assignment._id}`,
        assignment
    );
    return response.status;
};

export const deleteAssignment = async (courseId, assignmentId) => {
    const response = await axios.delete(
        `${URL}/${courseId}/${assignmentId}`
    );
    console.log("deleteAssignment-status:",response.status)
}