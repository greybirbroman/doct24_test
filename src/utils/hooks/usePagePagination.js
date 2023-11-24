import { useGetPostsTotalCountQuery } from '../../lib/redux/posts/postsSlice';
import { useLocalStorage } from './useLocalStorage';

const usePagePagination = () => {
  const [postsLimit, setPostsLimit] = useLocalStorage('postsLimit', 10);
  const { data: totalPosts } = useGetPostsTotalCountQuery();

  const pageSizeOptions = [10, 20, 50, 100, -1];

  const handleSelectPageSize = (newPostLimit) => {
    if (newPostLimit === -1) {
      setPostsLimit(Number(totalPosts));
    } else {
      setPostsLimit(newPostLimit);
    }
  };

  return {
    postsLimit,
    pageSizeOptions,
    handleSelectPageSize,
  };
};

export default usePagePagination;
