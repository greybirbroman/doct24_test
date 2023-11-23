import styles from './MainPage.module.css'
import { useState } from 'react';
import { useGetPostsQuery } from '../../lib/redux/posts/postsSlice';
import paddingWrapper from '../../components/HOC/paddingWrapper';
import Loader from '../../components/ui/Loader/Loader';
import PostsList from '../../components/PostsList/PostsList';

const MainPage = () => {
  const [postsLimit, setPostsLimit] = useState(10);
  const { data: posts, isError, isLoading } = useGetPostsQuery(postsLimit);

  console.log(posts);

  if (isLoading) return <Loader />;
  if (isError) return console.log('');
  return (
    <div className={styles.page}>
      {posts && <PostsList list={posts} />}
    </div>
  );
};

export default paddingWrapper(MainPage);
