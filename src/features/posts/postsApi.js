import { apiSlice } from "../api/apiSlice";

const postsApi = apiSlice.injectEndpoints({
    tagTypes: ["Post", ],
    endpoints: (builder) => ({
        getPost: builder.query({
            query: (id) => `blogs?_id=${id}`,
            providesTags: ["Post"],
        }),
        getPosts: builder.query({
            query: () => "blogs",
            providesTags: ['Post'],
        }),
        postPosts: builder.mutation({
            query: (data) => ({
                url: "blogs",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Post']
        }),
        likePost: builder.mutation({
            query: (body) => {
                const {id,email} = body
                // console.log(email);

                return {
                    url: `blogs/${id}`,
                    method: "PATCH",
                    body: {email},
                };
            },
            invalidatesTags: ['Post']
        }),
    }),
});

export const { useGetPostsQuery, usePostPostsMutation, useGetPostQuery, useLikePostMutation } =
    postsApi;
