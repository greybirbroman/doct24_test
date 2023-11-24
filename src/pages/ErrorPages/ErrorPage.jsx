import styles from './ErrorPage.module.css';
import { ReactComponent as NotFoundImage } from '../../images/404.svg';
import { PrimaryLink, PageTitle } from '../../components';

const ErrorPage = ({ title, subtitle }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <NotFoundImage />
        <div className={styles.textContainer}>
          <PageTitle title={title} subtitle={subtitle} />
          <PrimaryLink title='На главную' to='/' />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;