import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Product } from '../models/product.model';

export const productsApi = createApi({
    reducerPath: 'productsAoi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/'}),
    endpoints: (builder) =>({
        products: builder.query<Product[], void>({
            query: () => '/product'
        })
    })
})

export const { useProductsQuery } = productsApi;