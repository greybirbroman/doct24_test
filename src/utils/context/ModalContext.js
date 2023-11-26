import React, { createContext, useContext } from 'react';
import useModal from '../hooks/useModal';

const ModalContext = createContext();

export function ModalProvider(props) {
  const modal = useModal();

  return <ModalContext.Provider value={modal} {...props} />;
}

export function useModalContext() {
  return useContext(ModalContext);
}
