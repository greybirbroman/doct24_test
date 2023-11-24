import { apiSlice } from '../api/apiSlice';
import { USERS } from '../../../utils/routes';

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => USERS,
    }),
    getUserById: builder.query({
      query: (id) => `${USERS}/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userSlice;
