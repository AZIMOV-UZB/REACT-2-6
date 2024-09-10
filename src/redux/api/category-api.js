import { api } from './index'

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({ 
        url: '/category',
        params 
      }),
      providesTags:["Category"]
    }),

    getSingleCategory:build.query({
query:(id)=>({
  url:`/category/${id}`,
  providesTags:["Category"]

})
    }),
    createCategory: build.mutation({
      query: (body)=> ({
        url:"/category",
        method: "POST",
        body
      }),
      invalidatesTags: ["Category"]
    }),
    deleteCategory:build.mutation({
        query: (id)=> ({
            url: `/category/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["Category"]
    }),
    createCategory:build.mutation({
      query:({id,body}) =>({
        url:`/category/${id}`,
        method: "PUT",
        body
      }),
      invalidatesTags: ["Category"]
    })
  }),
});

// GET -> build.query
// POST, PUT, PATCH, DELETE -> build.mutation

export const {useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery,
  useUpdateCategoryMutation,} = categoryApi;