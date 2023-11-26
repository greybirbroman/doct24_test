import { createSlice } from '@reduxjs/toolkit';

const getStorageData = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
};

const initialState = {
  posts: getStorageData('localPosts', []),
  currentPostId: null,
};

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setCurrentPostId: (state, action) => {
      state.currentPostId = action.payload;
    },
  },
});

export const { setPosts, setCurrentPostId } = postsReducer.actions;

export default postsReducer.reducer;
