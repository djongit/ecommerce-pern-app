import { createAsyncThunk } from "@reduxjs/toolkit";

//    --- Function import ---
import { logInApi } from "./LogInApi";


export const logInAction = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            console.log('this is action credentialsFront: ', credentials);
            const response = await logInApi(credentials);
            
            return response;

        } catch(err) {
            console.log('this is action error: ', err)
            throw err;
        }
    }
);