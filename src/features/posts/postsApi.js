import { apiSlice } from "../api/apiSlice";

const postsApi = apiSlice.injectEndpoints({
    tagTypes: ["Post", "Like"],
    endpoints: (builder) => ({
        getPost: builder.query({
            query: (id) => `blogs?_id=${id}`,
            providesTags: ["Post"],
        }),
        getPosts: builder.query({
            query: () => "blogs",
            // providesTags: ['Post'],
        }),
        postPosts: builder.mutation({
            query: (data) => ({
                url: "blogs",
                method: "POST",
                body: data,
            }),
        }),
        likePost: builder.mutation({
            query: (body) => ({
                url: `blogs/${body.id}`,
                method: "PATCH",
                body: body.email,
            }),
        }),
    }),
});

export const { useGetPostsQuery, usePostPostsMutation, useGetPostQuery, useLikePostMutation } = postsApi;
