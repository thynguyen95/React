import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const spinnerReducer = createSlice({
    name: "spinnerReducer",
    initialState,
    reducers: {
        enableLoadingAction: (state, action) => {
            state.isLoading = action.payload;
        },
        disableLoadingAction: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { enableLoadingAction, disableLoadingAction } =
    spinnerReducer.actions;

export default spinnerReducer.reducer;
