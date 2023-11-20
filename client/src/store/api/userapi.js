import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAPI = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9098'
    }),
    endpoints(builder) {
        return {
            registerUser: builder.mutation({
                query: (formData) => {
                    return {
                        url: 'api/auth/register',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: formData
                    }
                }
            }),
            getUser: builder.query({
                query: (token) => {
                    return {
                        url: '/api/auth',
                        method: 'GET',
                        headers: {
                            'x-auth-token': token
                        }


                    }
                }
            })
        }
    }
})


export const { useRegisterUserMutation, useGetUserQuery } = userAPI;