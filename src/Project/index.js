import { Routes, Route, Navigate } from "react-router-dom";
import Project_nav from "./project_nav";

import Signin from "./Users/signin";
import Account from "./account";
import UserTable from "./Users/table";
import Signup from "./Users/signup";
import Nav from "../Nav";

function Project() {
    return (
        <div className="row">
            <Nav />
            <div className="col-2">
                <Project_nav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:id" element={<Account />} />
                    <Route path="/signup" element={<Signup />} />

                </Routes>
            </div>
        </div>
    );
}
export default Project;
