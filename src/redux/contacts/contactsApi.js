import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://62d0333dd9bf9f1705858229.mockapi.io'}),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),

         addContact: builder.mutation({
             query: ({name, phone}) => ({
                url: `/contacts`,
                method: 'POST',
                body: {
                    name,
                    phone
                },
            }),
            invalidatesTags: ['Contact'],
        }),

        removeContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const { useFetchContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi