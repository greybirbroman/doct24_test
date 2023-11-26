import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../lib/redux/posts/postsSlice';
import { showToast } from '../toaster';
import { getLocalPosts } from '../../lib/redux/posts/postsSelectors';

import { useDeletePostMutation } from '../../lib/redux/posts/postsApiSlice';

const usePostsActions = () => {
  const dispatch = useDispatch();
  const localPosts = useSelector(getLocalPosts);

  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const deletePostAction = async (id) => {
    if (!id) return;

    try {
      const response = await deletePost(id);
      if (response.error) throw Error;
      const updated = localPosts.filter((post) => post.id !== id);
      if (!updated) {
        showToast(`При удалении поста № ${id} произошла ошибка!`);
        return;
      }
      localStorage.setItem('localPosts', JSON.stringify(updated))
      dispatch(setPosts(updated));
      showToast(`Пост № ${id} успешно удален!`);
    } catch (e) {
      showToast(`При удалении поста № ${id} произошла ошибка!`);
    }
  };

  return {
    deletePostAction,
    isDeleting,
  };
};

export { usePostsActions };
