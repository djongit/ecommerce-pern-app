import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../register/RegisterSlice';
import getAllProductsReducer from '../products/ProductsSlice';

export const store = configureStore({
    reducer: {
        register: registerReducer,
        productsReducer: getAllProductsReducer,
    }
});