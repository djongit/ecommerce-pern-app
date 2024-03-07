import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../register/RegisterSlice';
import getAllProductsReducer from '../products/ProductsSlice';
import logInReducer from '../logIn/LogInSlice';

export const store = configureStore({
    reducer: {
        logIn: logInReducer,
        register: registerReducer,
        productsReducer: getAllProductsReducer,
    }
});