import { useState, useEffect } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalConfirm = () => {
    setIsModalConfirmOpen(true);
  };

  const closeModalConfirm = () => {
    setIsModalConfirmOpen(false);
  };


  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen || isModalConfirmOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isModalOpen]);

  return {
    isModalOpen,
    isModalConfirmOpen,
    openModal,
    openModalConfirm,
    closeModal,
    closeModalConfirm
  };
};

export default useModal;
