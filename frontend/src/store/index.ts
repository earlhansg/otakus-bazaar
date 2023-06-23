import { productsApi } from './services/productsApi';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart-slice';

const rootReducer =  configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export default rootReducer;