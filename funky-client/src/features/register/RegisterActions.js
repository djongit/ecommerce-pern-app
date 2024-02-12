import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi } from "./RegisterApi";

export const registerUserActions = createAsyncThunk(
    'auth/registerUser',
    async (credentials, thunkAPI) => {
        try {
            await registerUserApi(credentials);
            return {};
        } catch(err) {
            throw new Error('Error RegisterUserAction' + err);
        };
    }
)
