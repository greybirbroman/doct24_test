import styles from './PostsList.module.css';
import { showToast } from '../../utils/toaster';
import PostCard from '../ui/PostCard/PostCard';
import { useDeletePostMutation } from '../../lib/redux/posts/postsSlice';

const PostsList = ({ posts, setFilteredPosts, users }) => {

  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const assignAuthorToPost = (post) => {
    const author = users.find((user) => user.id === post.userId);
    return { ...post, author };
  };

  const handleDeletePost = async (id) => {
    if (!isDeleting) {
      try {
        const filtered = await deletePost(id);
        if (!filtered) throw Error;
        const newPosts = posts.filter((post) => post.id !== id);
        setFilteredPosts(newPosts);
        showToast(`Пост ${id} успешно удален!`)
      } catch (error) {
        showToast(`При удалении поста произошла ошибка!`)
        console.log(error);
      }
    }
  };

  return (
       
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard
            post={assignAuthorToPost(post)}
             deletePost={() => handleDeletePost(post.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
