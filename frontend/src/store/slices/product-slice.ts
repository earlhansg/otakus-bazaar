import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { fetchUsers } from '../actions/product-action';

type Product = {
    _id: string;
    name: string;
    rating: number;
    reviews: [];
    price: number;
    status: boolean;
    imagePath: string;
}

type ProductState = {
    data: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    data: [],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            });
    }
});

export const { reducer: productReducer } = productSlice;
export { fetchUsers };