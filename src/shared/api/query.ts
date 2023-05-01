import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_KEY } from 'shared/const/localStorage'

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:2000',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_KEY)

      if (token) {
        headers.set('Authorization', token)
      }

      return headers
    }
  }),
  endpoints: (builder) => ({})
})
