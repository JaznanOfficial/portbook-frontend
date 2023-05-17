
import { apiSlice } from '../api/apiSlice';



const postsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPost: builder.query({
            query:(id)=> `blogs?_id=${id}`
        }),
        getPosts: builder.query({
            query:()=> "blogs"
        }),
        postPosts: builder.mutation({
            query: (data) => ({
                url: "blogs",
                method: "POST",
                body:data
            })
        }),
       
    })
})

export const { useGetPostsQuery,usePostPostsMutation, useGetPostQuery, useLikeUpdateQuery } = postsApi;