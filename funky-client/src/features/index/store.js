import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../register/RegisterSlice';


export const store = configureStore({
    reducer: {
        register: registerReducer,

    }
});