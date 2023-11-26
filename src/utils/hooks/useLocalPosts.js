import { useEffect } from 'react';
import { useGetPostsQuery } from '../../lib/redux/posts/postsApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../lib/redux/posts/postsSlice';
import { getLocalPosts } from '../../lib/redux/posts/postsSelectors';

const useLocalPosts = () => {
  const {
    data: postsFromServer,
    isError: isPostsError,
    error: postsError,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
    refetch,
  } = useGetPostsQuery();

  const dispatch = useDispatch();
  const localPosts = useSelector(getLocalPosts);

  const makeRefetch = () => {
    refetch();
    localStorage.setItem('localPosts', JSON.stringify(postsFromServer));
    dispatch(setPosts(postsFromServer));
  };

  useEffect(() => {
    if (!localPosts || !localPosts.length) {
      makeRefetch();
    }
  }, [localPosts, dispatch]);


  return {
    localPosts,
    isPostsError,
    postsError,
    isPostsLoading,
    isPostsFetching,
  };
};

export default useLocalPosts;
