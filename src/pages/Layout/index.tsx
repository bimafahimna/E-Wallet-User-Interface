import React, { FC, useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SideNavbar from 'src/components/SideNavbar';
import styles from './styles';
import Header from 'src/components/Header';

const Layout: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/transactions':
        return 'Transactions';
      default:
        return 'Dashboard';
    }
  };
  useLayoutEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  });

  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <SideNavbar />
        <div>
          <Header title={title()} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
