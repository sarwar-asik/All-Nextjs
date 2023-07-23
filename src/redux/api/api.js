import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),

  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/news",
    }),
  }),
});


export const { useGetNewsQuery } = apiSlice;
