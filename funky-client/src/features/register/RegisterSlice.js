import { createSlice } from '@reduxjs/toolkit';
import { registerUserActions } from './RegisterActions';
const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: null
};


const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUserActions.pending]: (state, action) => {
            state.isLoading = true,
            state.error = false,
            isAuthenticated = false
        },
        [registerUserActions.rejected]: (state, action) => {
            state.isLoading = false,
            state.error = action.error.message
        },
        [registerUserActions.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.error = action.error,

        }
    }
});


export default registerSlice.reducer;