import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import postsSlice from './posts/postsSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    localPosts: postsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


export default store;
