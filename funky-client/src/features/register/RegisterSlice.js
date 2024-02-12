import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

    }
});