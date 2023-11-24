import { useEffect } from 'react';
import { useGetPostsQuery } from '../../lib/redux/posts/postsSlice';
import { useLocalStorage } from './useLocalStorage';
import { useDeletePostMutation } from '../../lib/redux/posts/postsSlice';
import { showToast } from '../toaster';

const usePosts = (postsLimit) => {
  const {
    data: posts,
    isError: isPostsError,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
  } = useGetPostsQuery(postsLimit);

  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const [filteredPosts, setFilteredPosts] = useLocalStorage(
    'filteredPosts',
    posts
  );

  //   useEffect(() => {
  //     const filteredPostsFromLocalStorage = localStorage.getItem('filteredPosts');
  //     if (!filteredPostsFromLocalStorage) {
  //       if (posts) {
  //         setFilteredPosts(posts);
  //       }
  //     }
  //   }, [posts, setFilteredPosts]);

  useEffect(() => {
    if (posts) {
      setFilteredPosts(posts);
    }
  }, [posts]);

  console.log('posts', posts);

  const handleDeletePost = async (id) => {
    if (!id) return;
    try {
      const filtered = await deletePost(id);
      if (!filtered) throw Error;
      setFilteredPosts((prev) => {
        const updated = prev.filter((post) => post.id !== id);
        return updated;
      });
      showToast(`Пост ${id} успешно удален!`);
    } catch (error) {
      showToast(`При удалении поста произошла ошибка!`);
      console.log(error);
    }
  };

  return {
    filteredPosts,
    setFilteredPosts,
    isPostsError,
    isPostsLoading,
    isPostsFetching,
    isDeleting,
    handleDeletePost,
  };
};

export default usePosts;
