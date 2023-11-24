import styles from './SingleUserPage.module.css';
import { useParams } from 'react-router-dom';
import paddingWrapper from '../../components/HOC/paddingWrapper';
import { UserCard, Loader, ButtonWithIcon } from '../../components/ui';
import { useGetUserByIdQuery } from '../../lib/redux/users/usersSlice';
import { errorMessage } from '../../utils/constants';
import { Undo2 } from 'lucide-react';
import useNavigation from '../../utils/hooks/useNavigation';

const SingleUserPage = () => {
  const { id } = useParams();
  const { data: user, isError, isLoading } = useGetUserByIdQuery(id);
  const { handleGoBack } = useNavigation();

  if (isLoading) return <Loader />;
  if (isError) return <div>{errorMessage}</div>;

  return (
    <div className={styles.page}>
      <h2>
        Страница с персональной информацией {' '}
        <span className={styles.span}>{user.name}</span>
      </h2>
      <UserCard user={user} />
      <ButtonWithIcon title='Назад' onClick={handleGoBack}>
        <Undo2 />
      </ButtonWithIcon>
    </div>
  );
};

export default paddingWrapper(SingleUserPage);
