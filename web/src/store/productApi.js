import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET"
            })
        }),
        getSingleProduct: builder.query({
            query: (name) => ({
                url: `/products/search?q=${name}`,
                method: "GET"
            })
        }),
        getById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET"
            })
        }),
        // postProduct: builder.mutation({
        //     query: (body) => ({
        //         url: "",
        //         method: "",
        //         body
        //     })
        // })
    })
})
export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetByIdQuery } = productApi