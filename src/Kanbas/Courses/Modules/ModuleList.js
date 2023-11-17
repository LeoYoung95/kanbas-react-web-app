import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {FaGripVertical, FaCheck, FaEllipsisV, FaAngleRight, FaPlus} from "react-icons/fa"; // Import icons
import {useSelector, useDispatch} from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
    const {courseId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };




    return (
        <ul className="list-group">
            <li className="list-group-item align-items-center">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <input className={"form-control"}
                               value={module.name}
                               onChange={(e) =>
                                   dispatch(setModule({...module, name: e.target.value}))
                               }/>

                        <textarea className={"form-control"}
                                  value={module.description}
                                  onChange={(e) =>
                                      dispatch(setModule({...module, description: e.target.value}))
                                  }/>

                    </div>
                    <div className="col-2">
                        <button className={"btn btn-primary"}
                                onClick={handleUpdateModule}>
                            Update
                        </button>
                        <button className={"btn btn-success"}
                            onClick={handleAddModule}>
                            Add
                        </button>

                    </div>
                </div>
            </li>

            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <FaGripVertical className="me-1" size="1em"/>
                                <FaAngleRight size="1em"/> {/* Triangle icon */}
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-8">
                                        <h3>{module.name}</h3>
                                    </div>
                                    <div className="col-4">
                                        <button className={"btn btn-danger"}
                                            onClick={() => handleDeleteModule(module._id)}
                                        >
                                            Delete
                                        </button>

                                        <button className={"btn btn-success"}
                                                onClick={() => dispatch(setModule(module))}>
                                            Edit
                                        </button>
                                    </div>
                                    <p>{module.description}</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2">
                                <FaCheck className="text-success" size="1em"/>
                                <FaPlus size="1em"/> {/* Plus icon */}
                                <FaEllipsisV size="1em"/>
                            </div>
                        </div>
                    </li>
                ))}
        </ul>
    );
}

export default ModuleList;
