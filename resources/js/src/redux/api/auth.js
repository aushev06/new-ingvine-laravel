import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../../core/axios";
import {axiosBaseQuery} from "./category";

export const authApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: axiosBaseQuery({baseUrl: `${BASE_URL}`}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                return ({url: `/login`, method: 'POST', data})
            },
        }),

        register: builder.mutation({
            query: (data) => {
                return ({url: `/register`, method: 'POST', data})
            },
        }),

        getMe: builder.query({
            query: () => ({url: '/api/me'}),
        })
    }),
})

export const {useLoginMutation, useRegisterMutation, useGetMeQuery} = authApi
