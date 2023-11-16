import axios from "axios";
const URL = "http://localhost:4000/api/courses";
export const findAllCourses = async () => {
    const response = await axios.get(URL);
    return response.data;
};

export const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    return response.data;
};

export const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    return response.data;
};

export const createCourse = async (course) => {
    const response = await axios.post(URL, course);
    return response.data;
};

export const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    return response.data;
};

const CourseService = {
    findAllCourses,
    deleteCourse,
    updateCourse,
    createCourse,
    findCourseById
};

export default CourseService;