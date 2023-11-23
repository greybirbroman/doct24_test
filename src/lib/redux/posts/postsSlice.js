import { apiSlice } from '../api/apiSlice';
import { POSTS } from '../../../utils/routes';

export const postsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit = 1) => `${POSTS}?_limit=${limit}`,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: builder.query({
      query: (id) => `${POSTS}/${id}`,
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
  useGetPostByIdQuery,
  useGetPostsTotalCountQuery,
  useLazyGetPostsQuery,
} = postsSlice;