import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    course: {
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    },

};

const coursesSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        // Set all courses
        setCourses_reducer: (state, action) => {
            state.courses = action.payload;
        },

        // Add a new course
        addCourse_reducer: (state, action) => {
            state.courses.unshift(action.payload); // Adds to the start of the list
        },

        // Update a course
        updateCourse_reducer: (state, action) => {
            state.courses = state.courses.map(course =>
                course._id === action.payload._id ? action.payload : course
            );
        },

        // Delete a course
        deleteCourse_reducer: (state, action) => {
            state.courses = state.courses.filter(course => course._id !== action.payload);
        },

        // Set a single course (for editing)
        setCurrentCourse_reducer: (state, action) => {
            state.course = action.payload;
        },

        // Reset the current course to default
        resetCurrentCourse_reducer: (state) => {
            state.course = initialState.course;
        }
    },

});

export const {
    setCourses_reducer,
    addCourse_reducer,
    updateCourse_reducer,
    deleteCourse_reducer,
    setCurrentCourse_reducer,
    resetCurrentCourse_reducer,
} = coursesSlice.actions;

export default coursesSlice.reducer;