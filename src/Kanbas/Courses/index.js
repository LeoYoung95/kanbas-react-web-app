import React, {useState} from 'react';
import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams, useLocation, Link} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import {FaBars} from 'react-icons/fa';
import './index.css'; // Importing a CSS file for styling
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses({courses}) {
    const {courseId} = useParams();
    const course = courses.find((course) => course._id === courseId);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const location = useLocation();

    const toggleNav = () => {
        console.log("Toggling Nav");
        setIsNavVisible(!isNavVisible);
    };

    // Extracting the pathname and splitting it into segments
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = pathSegments.slice(2, -1).map((segment, index, array) => {
        const path = `/${pathSegments.slice(0, index + 3).join('/')}`;
        return (
            <span key={segment}>
      <Link to={path} style={{color: '#971c26'}}>
        {segment}
      </Link>
                {index < array.length - 1 && " > "}
    </span>
        );
    });
    const activeNav = pathSegments[pathSegments.length - 1] || 'Home';


    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <h2 className='main-title-courses'>
                        <FaBars
                            onClick={toggleNav}
                            style={{marginRight: '10px', cursor: 'pointer', fontSize: '20px', color: '#971c26'}}
                        />

                        {/* Breadcrumb navigation */}
                        <nav>
                            {breadcrumbItems}
                            {" > "}
                            <span style={{color: '#464242'}}>
              {activeNav}
            </span>
                        </nav>
                    </h2>
                </div>

                <div className="row flex-row">
                    {isNavVisible && (
                        <div className="col-lg-2 col-md-2 d-none d-md-block">
                            <CourseNavigation/>
                        </div>
                    )}
                    <div
                        className={`col-md-${isNavVisible ? '10' : '12'} overflow-y-scroll  main-content`}
                        style={{top: "60px"}}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<Modules/>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                            <Route path="Grades" element={<Grades/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
