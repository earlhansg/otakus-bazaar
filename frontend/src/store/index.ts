import { productReducer } from './slices/product-slice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = configureStore({
    reducer: {
        products: productReducer
    }
    // other reducers...
});

export default rootReducer;