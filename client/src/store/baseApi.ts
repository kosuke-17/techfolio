import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3031/',
    // prepareHeaders: async (headers) => {
    //   const token = localStorage.getItem('token')

    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  endpoints: () => ({}),
})
