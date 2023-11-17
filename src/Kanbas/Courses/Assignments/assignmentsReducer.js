import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    assignments: [],
    assignment: { title: "New assignment", dueDate: "2021-10-10", points: 100 },

};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        // Set all assignments
        setAssignments_reducer: (state, action) => {
            state.assignments = action.payload;
            console.log("set_assignments:",state.assignments)
        },


        // Add a new assignment
        addAssignment_reducer: (state, action) => {
            state.assignments.unshift(action.payload); // Adds to the start of the list
        },

        // Update an assignment
        updateAssignment_reducer: (state, action) => {
            state.assignments = state.assignments.map(assignment =>
                assignment._id === action.payload._id ? action.payload : assignment
            );
            console.log("update_assignments:",state.assignments)
        },

        // Delete an assignment
        deleteAssignment_reducer: (state, action) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
        },

        // Set a single assignment (for editing)
        setCurrentAssignment_reducer: (state, action) => {
            state.assignment = action.payload;
        },

        // Reset the current assignment to default
        resetCurrentAssignment_reducer: (state) => {
            state.assignment = initialState.assignment;
        }
    },
});

export const {
    setAssignments_reducer,
    addAssignment_reducer,
    updateAssignment_reducer,
    deleteAssignment_reducer,
    setCurrentAssignment_reducer,
    resetCurrentAssignment_reducer,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
