import { apiSlice } from '../api/apiSlice';
import { POSTS, COMMENTS } from '../../../utils/routes';

export const postsSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit) => `${POSTS}?_limit=${limit}`,
    }),
    getPostById: builder.query({
      query: (id) => `${POSTS}/${id}`,

    }),
    getPostCommentsById: builder.query({
      query: (id) => `${POSTS}/${id}/${COMMENTS}`,
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
  useGetPostsTotalCountQuery,
  useLazyGetPostsQuery,
  useDeletePostMutation,
} = postsSlice;
