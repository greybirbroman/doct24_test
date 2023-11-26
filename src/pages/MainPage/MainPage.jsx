import styles from './MainPage.module.css';
import usePosts from '../../utils/hooks/useLocalPosts';
import { useGetUsersQuery } from '../../lib/redux/users/usersSlice';
import paddingWrapper from '../../components/HOC/paddingWrapper';
import { Loader, PaginationSelect, FilterBar } from '../../components/ui';
import PostsList from '../../components/PostsList/PostsList';
import usePagePagination from '../../utils/hooks/usePagePagination';
import { errorMessage } from '../../utils/constants';
import { RefreshCw, Plus } from 'lucide-react';
import { ButtonWithIcon } from '../../components/ui';
import { useModalContext } from '../../utils/context/ModalContext';

const MainPage = () => {
  const {
    data: users,
    isError: isUsersError,
    isLoading: isUsersLoading,
  } = useGetUsersQuery();

  const { postsLimit, pageSizeOptions, handleSelectPageSize } =
    usePagePagination();

  const { openModal } = useModalContext()

  const {
    isPostsLoading,
    isPostsError,
    postsError,
    localPosts,
    handleRefetch,
  } = usePosts();

  if (isPostsLoading || isUsersLoading) return <Loader />;
  if (isUsersError || isPostsError)
    return (
      <div>{`${errorMessage} ${postsError?.name}, ${postsError?.message}`}</div>
    );

  return (
    <div className={styles.page}>
      {localPosts.length && users ? (
        <>
        <div className={styles.container}>
          <ButtonWithIcon title='Add new' onClick={openModal}>
            <Plus />
          </ButtonWithIcon>
          <FilterBar list={users} />
        </div>
          <PostsList
            posts={localPosts}
            postsLimit={postsLimit}
            users={users}
          />
          <PaginationSelect
            pageSizeOptions={pageSizeOptions}
            selectedPageSize={postsLimit}
            onSelectPageSize={handleSelectPageSize}
          />
        </>
      ) : (
        <ButtonWithIcon title='Refresh' onClick={handleRefetch}>
          <RefreshCw />
        </ButtonWithIcon>
      )}
    </div>
  );
};

export default paddingWrapper(MainPage);
