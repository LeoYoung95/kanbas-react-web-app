import React from 'react';
import {
    FaEllipsisV, FaBan, FaCheck, FaUtensils,
    FaCopyright, FaMountain, FaBullhorn,
    FaChartLine, FaBell
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Modules from "../Modules";
import './index.css';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="co1-lg-6 col-md col-sm-10">
                    <Modules/>
                </div>

                <div className="col-lg-3 col-md-3 d-none d-xl-block min-with-300">
                    <h4>Course Status</h4>

                    <div className="d-flex mb-2">

                        <button className="btn btn-secondary" disabled>
                            <FaBan/> Unpublish
                        </button>

                        <button className="btn btn-success" disabled>
                            <FaCheck/> Published
                        </button>
                    </div>

                    <br/>

                    <div>
                        <button className="btn btn-secondary mb-2 justify-content-start btn-fixed-width ">
                            <FaUtensils/> Import Existing Content
                        </button>
                    </div>

                    <div>
                        <button className="btn btn-secondary mb-2 justify-content-start btn-fixed-width ">
                            <FaCopyright/> Import from Commons
                        </button>
                    </div>

                    <div>
                        <button className="btn btn-secondary mb-2 justify-content-start btn-fixed-width ">
                            <FaCopyright/> Choose Home Page
                        </button>
                    </div>

                    <div>
                        <button className="btn btn-secondary mb-2 justify-content-start btn-fixed-width ">
                            <FaMountain/> View Course Stream
                        </button>
                    </div>


                    <div>
                        <button className="btn btn-secondary mb-2 justify-content-start btn-fixed-width ">
                            <FaBullhorn/> New Announcement
                        </button>
                    </div>

                    <div>
                        <button className="btn btn-secondary mb-2 justify-content-start btn-fixed-width ">
                            <FaChartLine/> New Analytics
                        </button>
                    </div>

                    <div>
                        <button className="btn btn-secondary mb-2 justify-content-start btn-fixed-width ">
                            <FaBell/> View Course Notifications
                        </button>
                    </div>

                    <br/>
                    <div className='red-url'>
                        <h4>To Do</h4>
                        <hr/>
                        <div className="mb-2">
                            <a href="#">Grade A1 - ENV + HTML</a>
                            <div style={{marginLeft: '20px'}}>
                                100 points &bull; Sep 18 at 11:59pm <br/>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <div className='red-url'>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h5 style={{marginRight: '10px'}}>Coming Up</h5>
                            <a href="#">View Calendar</a>
                        </div>
                        <hr/>

                        <div className="mb-2">
                            <a href="#">Lecture</a>
                            <div style={{marginLeft: '20px'}}>
                                C54550.12631.202410<br/>
                                Sep 11 at 11:45am<br/>
                                CS5610 06 SP23 Lecture
                            </div>
                        </div>
                        <br/>

                        <div className="mb-2">
                            <a href="#">CS5610 06 SP23 Lecture</a>
                            <div style={{marginLeft: '20px'}}>
                                C54550.12631.202410<br/>
                                Sep 11 at 11:45am<br/>
                            </div>
                        </div>
                        <br/>

                        <div className="mb-2">
                            <a href="#">CS5610 Web Development
                                <br/>Summer 1 2023 - LECTURE<br/></a>
                            <div style={{marginLeft: '20px'}}>
                                C54550.12631.202410<br/>
                                Sep 11 at 7pm
                            </div>
                        </div>
                        <br/>

                        <a href="#" className="btn btn-link">12 more in the next week...</a>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Home;