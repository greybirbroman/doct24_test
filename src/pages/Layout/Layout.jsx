import React from 'react';
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return <div className={styles.layoutWrapper}>
    <div className='gradient' />
    <Header />
    {<Outlet />}
    <ToastContainer />
    </div>;
};

export default Layout;