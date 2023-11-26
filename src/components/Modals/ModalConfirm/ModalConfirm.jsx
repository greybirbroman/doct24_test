import styles from './ModalConfirm.module.css';
import Modal from '../Modal/Modal';
import { ButtonWithIcon } from '../../ui';
import { X, Trash } from 'lucide-react';
import { useModalContext } from '../../../utils/context/ModalContext';
import { usePostsActions } from '../../../utils/hooks/usePostsActions';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCurrentPostId } from '../../../lib/redux/posts/postsSelectors';

const ModalConfirm = ({ title }) => {

  const { isModalConfirmOpen, closeModalConfirm } = useModalContext();
  const { deletePostAction } = usePostsActions();

  const currentPostId = useSelector(getCurrentPostId)

  const handleDeletePost = () => {
    if(currentPostId) {
      deletePostAction(currentPostId);
      closeModalConfirm();
    }
  };

  return (
    <Modal isOpen={isModalConfirmOpen} onClose={closeModalConfirm}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.buttonsContainer}>
          <ButtonWithIcon children={<X />} title='Отмена' onClick={closeModalConfirm}/>
          <ButtonWithIcon
            children={<Trash />}
            title='Удалить'
            onClick={handleDeletePost}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
