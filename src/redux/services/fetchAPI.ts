import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../ts/interfaces/users/IUser";

export const fetchAPI = createApi({
    reducerPath:'fetchAPI',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    tagTypes:['User'],
    endpoints:(builder) => ({
        getUsers:builder.query<IUser[],string>({
            query: () => 'users',
            providesTags:() => ['User']
        }),
        addUser:builder.mutation<IUser,IUser>({
            query: (user) => ({
                url: 'users',
                method:'POST',
                body:user
            }),
            invalidatesTags:['User']
        }),
        deleteUser:builder.mutation<IUser,number | string>({
            query: (userId) => ({
                url: `users/${userId}`,
                method: 'DELETE'
            }),
            invalidatesTags:['User']
        }),
        editUser:builder.mutation<IUser,IUser>({
            query: (user) => ({
                url:`users/${user.id}`,
                method:'PUT',
                body:user
            }),
            invalidatesTags:['User']
        })
    })
})