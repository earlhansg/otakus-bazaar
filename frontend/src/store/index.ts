import { productsApi } from './services/productsApi';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer =  configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export default rootReducer;