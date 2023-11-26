import styles from './Modal.module.css';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import ButtonWithIcon from '../../ui/ButtonWithIcon/ButtonWithIcon';
import { X } from 'lucide-react';

const Modal = ({ children, isOpen, onClose }) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <section className={styles.container}>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal} ref={modalRef}>
        <ButtonWithIcon
          customClass={styles.closeButtonContainer}
          onClick={onClose}
          children={<X />}
        />

        {children}
      </div>
    </section>,
    document.getElementById('root')
  );
};

export default React.memo(Modal);
