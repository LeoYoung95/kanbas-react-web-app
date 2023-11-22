import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";

import Signin from "../Users/signin";
import Account from "./account";
import UserTable from "../Users/table";
import Signup from "../Users/signup";

function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <Nav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:id" element={<Account />} />

                </Routes>
            </div>
        </div>
    );
}
export default Project;
