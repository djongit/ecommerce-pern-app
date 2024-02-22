import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi } from "./RegisterApi";

export const registerUserActions = createAsyncThunk(
    'auth/registerUser',
    async (credentials, {rejectWithValue}) => {
        try {
            // console.log('this is regAction ' , registerUserApi(credentials));
           const response = await registerUserApi(credentials);
           if(response === 'User already exists!') {
            throw new Error(response);
           }
            // return {};
            // console.log('this is error: ', response.error);
            // console.log('this is data: ', response.data);
            // console.log('this is response Action: ', response);
            return response;
        } catch(err) {
            return rejectWithValue(err.message);
            // throw new Error('Error RegisterUserAction', err);
            // console.error('Error RegisterAction', err);

        };
    }
)
