import { createSlice } from "@reduxjs/toolkit";

import { logInAction } from "./LogInActions";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: false,

}


const logInSlice = createSlice({
    name: 'logIn',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logInAction.pending, (state, action) => {
                state.isLoading = true;
                state.isAuthenticated = false;
                state.error = false;
            })
            .addCase(logInAction.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.error.message;
                // console.log('this is rejected:', action.error);
            })
            .addCase(logInAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.error = false;
            })
    }
})

export default logInSlice.reducer;