import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "products",
    }),
    postProduct: builder.mutation({
      query: ({ product }) => ({
        url: "/product",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useGetProductQuery, usePostProductMutation } = productsApi;
