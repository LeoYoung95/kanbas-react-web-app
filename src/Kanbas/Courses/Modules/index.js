import ModuleList from "./ModuleList";
import {FaEllipsisV} from "react-icons/fa";
import React from "react";
function Modules() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="co1-lg-6 col-md col-sm-10">

                    <div className="d-flex top-button justify-content-end">
                        <button
                            className="btn btn-secondary custom-btn-height"
                            style={{marginRight: '5px'}}
                        >
                            Collapse All
                        </button>

                        <button
                            className="btn btn-secondary custom-btn-height"
                            style={{marginRight: '5px'}}
                        >
                            View Progress
                        </button>

                        <div className="btn-group" style={{marginRight: '5px'}}>
                            <button
                                type="button"
                                className="btn btn-secondary custom-btn-height dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Publish All
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Publish all items and modules</a>
                                <a className="dropdown-item" href="#">UnPublish</a>
                            </div>
                        </div>

                        <button
                            className="btn btn-danger custom-btn-height"
                            style={{marginRight: '5px'}}
                        >
                            + Module
                        </button>

                        <button className="btn btn-secondary custom-btn-height">
                            <FaEllipsisV/>
                        </button>

                        <hr/>
                    </div>

                    <div className="row padding-top-20">

                        <ModuleList/>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Modules;