import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["product"],
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
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  usePostProductMutation,
  useDeleteProductMutation,
} = productsApi;
