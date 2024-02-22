import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsApi } from "./ProductsApi";


export const getAllProductsActions = createAsyncThunk(
    'products/getAllProductsActions',
    async(arg, thunkAPI) => {
        try {
            const response = await getAllProductsApi();
            return {
                productsActons: response
            }
        } catch(err) {
            throw new Error('Error GetAllProductsActions ' + err);
        }
    }
)


