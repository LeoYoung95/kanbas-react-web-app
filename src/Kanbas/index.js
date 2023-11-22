import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./Store";
import {Provider} from "react-redux";

function Kanbas() {


    return (
        <Provider store={store}>
            <div className="container-fluid p-0 px-0">
                <div className="row justify-content-start">
                    <div className="col col-lg-1 col-md-1 d-none d-md-block full-height">
                        <KanbasNavigation/>
                    </div>
                    <div className="col col-lg-11 col-md-11 padding-for-kabas-nav ">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="Account" element={<h1>Account</h1>}/>
                            <Route path="Dashboard" element={
                                <Dashboard/>}/>
                            <Route path="Courses/:courseId/*" element={
                                <Courses/>}/>

                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;