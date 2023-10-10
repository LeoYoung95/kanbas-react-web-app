import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCheck, FaEllipsisV, FaAngleRight, FaPlus } from "react-icons/fa"; // Import icons

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    return (
        <ul className="list-group">
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <FaGripVertical className="me-1" size="1em" />
                                <FaAngleRight size="1em" /> {/* Triangle icon */}
                            </div>
                            <div className="col-md-8">
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </div>
                            <div className="d-flex gap-2">
                                <FaCheck className="text-success" size="1em" />
                                <FaPlus size="1em" /> {/* Plus icon */}
                                <FaEllipsisV size="1em" />
                            </div>
                        </div>
                    </li>
                ))}
        </ul>
    );
}

export default ModuleList;
