import { createSlice } from '@reduxjs/toolkit';
import { registerUserActions } from './RegisterActions';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
    status: null
};


const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUserActions.pending, (state, action) => {
                state.isLoading = true;
                state.error = false;
                state.isAuthenticated = false;
            })
            // .addCase(registerUserActions.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.error = action.payload ? action.payload.message :  'Unknown error';
            //     state.isAuthenticated = false; // Reset authenticated state
            // })
            .addCase(registerUserActions.rejected, (state, action) => {
                console.log('Rejected action payload:', action.payload);
                state.isLoading = false;
                state.error = action.error.message || 'Unknown error';
                state.status = action.payload;
                state.isAuthenticated = false;
            })
            .addCase(registerUserActions.fulfilled, (state, action) => {
                console.log('Fullfilled action payload:', action.payload);
                state.isLoading = false;
                state.error = null; // Reset error state
                state.status = action.payload.email; // Set authenticated state to true upon successful registration
            })
    }
    
    
    // {
    //     [registerUserActions.pending]: (state, action) => {
    //         state.isLoading = true;
    //         state.error = false;
    //         state.isAuthenticated = false;
    //     },
    //     [registerUserActions.rejected]: (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.error.message;
    //     },
    //     [registerUserActions.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.error;

    //     }
    // }
});


export default registerSlice.reducer;