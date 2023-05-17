import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rojnamcha.onrender.com/api/v1/" }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});