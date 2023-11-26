import { apiSlice } from '../api/apiSlice';
import { POSTS, COMMENTS } from '../../../utils/routes';

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // При наличии живого сервера - запрашивать через limit
    getPosts: builder.query({
      query: () => `${POSTS}`,
    }),
    getPostById: builder.query({
      query: (id) => `${POSTS}/${id}`,
    }),
    getPostCommentsById: builder.query({
      query: (id) => `${POSTS}/${id}/${COMMENTS}`,
    }),

    getPostsByUser: builder.query({
      query: (userId) => `${POSTS}/?userId=${userId}`
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `${POSTS}/${id}`,
        method: 'DELETE',
      }),
      

    }),
    getPostsTotalCount: builder.query({
      query: () => `${POSTS}?_page=1`,
      transformResponse: async (_, meta) => {
        const total = meta.response.headers.get('x-total-count');
        return total;
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostCommentsByIdQuery,
  useGetPostByIdQuery,
  useGetPostsByUserQuery,
  useGetPostsTotalCountQuery,
  useDeletePostMutation,
} = postsApiSlice;
