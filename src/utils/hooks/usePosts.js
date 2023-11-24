import { useEffect } from 'react';
import { useGetPostsQuery } from '../../lib/redux/posts/postsSlice';
import { useLocalStorage } from './useLocalStorage';

const usePosts = (postsLimit) => {
  const {
    data: posts,
    isError: isPostsError,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
  } = useGetPostsQuery(postsLimit);

  const [filteredPosts, setFilteredPosts] = useLocalStorage(
    'filteredPosts',
    posts
  );

  useEffect(() => {
    setFilteredPosts(posts || []);
  }, [postsLimit, posts]);

  return {
    filteredPosts,
    setFilteredPosts,
    isPostsError,
    isPostsLoading,
    isPostsFetching,
  };
};

export default usePosts;
