import styles from './PostsList.module.css';
import PostCard from '../ui/PostCard/PostCard';

const PostsList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
