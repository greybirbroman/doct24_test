import styles from './PostsList.module.css';
import PostCard from '../ui/PostCard/PostCard';

const PostsList = ({ posts, users, deletePost, isDeleting }) => {
  const assignAuthorToPost = (post) => {
    const author = users.find((user) => user.id === post.userId);
    return { ...post, author };
  };

  return (
    <ul className={styles.list}>
      {posts && posts.length && posts.map((post) => (
        <li key={post.id}>
          <PostCard post={assignAuthorToPost(post)} deletePost={deletePost} isDeleting={isDeleting}/>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
