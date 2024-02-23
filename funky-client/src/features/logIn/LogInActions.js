import { createAsyncThunk } from "@reduxjs/toolkit";

//    --- Function import ---
import { logInApi } from "./LogInApi";

export const logInAction = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await logInApi(credentials);
            return response;
        } catch(err) {
            throw err;
        }
    }
);