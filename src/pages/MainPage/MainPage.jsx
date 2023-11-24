import styles from './MainPage.module.css';
import { useEffect } from 'react';
import usePosts from '../../utils/hooks/usePosts';
import { useGetUsersQuery } from '../../lib/redux/users/usersSlice';
import paddingWrapper from '../../components/HOC/paddingWrapper';
import { Loader, PaginationSelect, FilterBar } from '../../components/ui';
import PostsList from '../../components/PostsList/PostsList';
import usePagePagination from '../../utils/hooks/usePagePagination';
import { errorMessage } from '../../utils/constants';

const MainPage = () => {
  const { postsLimit, pageSizeOptions, handleSelectPageSize } =
    usePagePagination();
  const { isPostsLoading, isPostsError, isPostsFetching, filteredPosts, handleDeletePost, isDeleting } =
    usePosts(postsLimit);

  const {
    data: users,
    isError: isUsersError,
    isLoading: isUsersLoading,
  } = useGetUsersQuery();

  if (isPostsLoading || isUsersLoading) return <Loader />;
  if (isUsersError || isPostsError) return <div>{errorMessage}</div>;

  return (
    <div className={styles.page}>
      {filteredPosts && users ? (
        <>
          <FilterBar list={users} />
          <PostsList posts={filteredPosts} users={users} deletePost={handleDeletePost} isDeleting={isDeleting}/>
          {!isPostsFetching && (
            <PaginationSelect
              pageSizeOptions={pageSizeOptions}
              selectedPageSize={postsLimit}
              onSelectPageSize={handleSelectPageSize}
            />
          )}
        </>
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
};

export default paddingWrapper(MainPage);
