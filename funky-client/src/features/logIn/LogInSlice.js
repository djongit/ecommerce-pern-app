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
                isAuthenticated = false;
                error = false;
            })
            .addCase(logInAction.rejected, (state, action) => {
                state.isLoading = false;
                isAuthenticated = false;
                error = action.error.message;
            })
            .addCase(logInAction.fulfilled, (state, action) => {
                state.isLoading = false;
                isAuthenticated = true;
                error = false;
            })
    }
})