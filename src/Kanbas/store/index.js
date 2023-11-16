import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import coursesReducer from "../Dashboard/coursesReducer";


const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer,
        coursesReducer,
    }
});


export default store;

