import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from '../../utils/context/ModalContext';
import ModalAddPost from '../../components/Modals/ModalAddPost/ModalAddPost';
import ModalConfirm from '../../components/Modals/ModalConfirm/ModalConfirm';

const Layout = () => {
  return (
    <ModalProvider>
      <div className={styles.layoutWrapper}>
        <div className='gradient' />
        <Header />
        {<Outlet />}
        <ToastContainer />
        <ModalAddPost />
        <ModalConfirm title='Удалить?'/>
      </div>
    </ModalProvider>
  );
};

export default Layout;
