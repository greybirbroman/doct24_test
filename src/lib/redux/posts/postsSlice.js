import { apiSlice } from '../api/apiSlice';
import { POSTS, COMMENTS } from '../../../utils/routes';

export const postsSlice = apiSlice.injectEndpoints({
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit) => `${POSTS}?_limit=${limit}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: builder.query({
      query: (id) => `${POSTS}/${id}`,
    }),
    getPostCommentsById: builder.query({
        query: (id) => `${POSTS}/${id}/${COMMENTS}`,
    }),
    deletePost: builder.mutation({
        query(id) {
            return {
                url: `${POSTS}/${id}`,
                method: 'DELETE',
            }
        },
        invalidatesTags: ['Posts']
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
  useDeletePostMutation
} = postsSlice;