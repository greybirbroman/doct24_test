import styles from './PostsList.module.css';
import PostCard from '../ui/PostCard/PostCard';

const PostsList = ({ posts, postsLimit, users }) => {

  const assignAuthorToPost = (post) => {
    const author = users.find((user) => user.id === post.userId);
    return { ...post, author };
  };

  console.log(posts);
  return (
    <ul className={styles.list}>
      {posts && posts.length && posts.slice(0, postsLimit).map((post) => (
        <li key={post.id}>
          <PostCard post={assignAuthorToPost(post)}/>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
