import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import '../index.css';
import sampleImage from '../Images/react.png';
import {useDispatch, useSelector} from "react-redux";
import {
    setCourses_reducer,
    addCourse_reducer,
    deleteCourse_reducer,
    updateCourse_reducer,
    setCurrentCourse_reducer,
    resetCurrentCourse_reducer
} from "./coursesReducer";
import {findAllCourses, deleteCourse, updateCourse, createCourse, findCourseById} from "./client";

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    return `${year}${month}`;
}

function Dashboard() {
    // initialize the courses
    useEffect(() => {
        findAllCourses().then((courses) =>
            dispatch(setCourses_reducer(courses))
        );
        console.log("re-render courses")
    }, []);


    const courses = useSelector((state) => state.coursesReducer.courses);
    const course = useSelector((state) => state.coursesReducer.course);
    const dispatch = useDispatch();


    const handleAddCourse = async () => {
        const newCourse = await createCourse(course);
        dispatch(addCourse_reducer(newCourse));
    };
    const handleDeleteCourse = async (courseId) => {
        const status = await deleteCourse(courseId);
        dispatch(deleteCourse_reducer(courseId));
    };
    const handleUpdateCourse = async () => {
        const status = await updateCourse(course);
        dispatch(updateCourse_reducer(course));
        dispatch(resetCurrentCourse_reducer());
    };

    const handleSetCourse = async (courseId) => {
        const course = await findCourseById(courseId);
        dispatch(setCurrentCourse_reducer(course));
    }


    return (
        <div className='courses-container'>
            <h1 className="main-title-dashboard">Dashboard</h1>

            <div className="row col-9 justify-content-end padding-bottom-10">

                <div className="col-7">
                    <h5>Course</h5>
                    <input value={course.name} className="form-control"
                           onChange={(e) => dispatch(setCurrentCourse_reducer({...course, name: e.target.value}))}/>
                    <input value={course.number} className="form-control"
                           onChange={(e) => dispatch(setCurrentCourse_reducer({...course, number: e.target.value}))}/>
                    <input value={course.startDate} className="form-control" type="date"
                           onChange={(e) => dispatch(setCurrentCourse_reducer({...course, startDate: e.target.value}))}/>
                    <input value={course.endDate} className="form-control" type="date"
                           onChange={(e) => dispatch(setCurrentCourse_reducer({...course, endDate: e.target.value}))}/>

                </div>
                <div className="col-4">
                    <button className={"btn btn-primary"} onClick={handleUpdateCourse}>
                        Update
                    </button>

                    <button className={"btn btn-success"} onClick={handleAddCourse}>
                        Add
                    </button>

                </div>
            </div>

            <h3 className="main-sub-title">Published Courses ({courses.length})</h3>

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
                                            handleSetCourse(course._id);
                                        }}>
                                    Edit
                                </button>


                                <button className={"btn btn-danger"}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            handleDeleteCourse(course._id);
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
