import { createSlice } from "@reduxjs/toolkit";
import { getAllProductsActions } from "./ProductsActions";
const initialState = {
    isLoading: false,
    error: null,
    products: {}
}

const getAllProductsSlice = createSlice({
    name: 'getAllProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductsActions.pending, (state, action) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getAllProductsActions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(getAllProductsActions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
                state.products = action.payload.products;
            })
    }
});

export default getAllProductsSlice.reducer;