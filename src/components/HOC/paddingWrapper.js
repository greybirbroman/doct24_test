import styles from './paddingWrapper.module.css';

const paddingWrapper = (WrappedComponent) => {
  return (props) => (
    <div className={styles.wrapper}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default paddingWrapper;