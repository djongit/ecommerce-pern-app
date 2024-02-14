import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../register/RegisterSlice';
const store = configureStore({
    reducer: {
        register: registerReducer,
        
    }
})