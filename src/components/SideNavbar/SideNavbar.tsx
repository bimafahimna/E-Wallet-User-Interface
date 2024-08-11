import React, { FC } from 'react';
import styles from './styles';
import * as I from 'src/assets/navIcon';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

type IconProps = React.ComponentProps<typeof I.DashboardIcon>;

interface MenuNav {
  name: string;
  iconElement: FC<IconProps>;
  navTo: string;
}

const menuNav: MenuNav[] = [
  {
    name: 'Dashboard',
    iconElement: I.DashboardIcon,
    navTo: '/dashboard',
  },
  {
    name: 'Transactions',
    iconElement: I.TransactionsIcon,
    navTo: '/transactions',
  },
  {
    name: 'Transfer',
    iconElement: I.TransferIcon,
    navTo: '/transfer',
  },
  {
    name: 'Top Up',
    iconElement: I.TopUpIcon,
    navTo: '/topup',
  },
  {
    name: 'Logout',
    iconElement: I.LogoutIcon,
    navTo: '/logout',
  },
];

interface Props {
  isMobile?: boolean;
}

const SideNavbar: FC<Props> = ({ isMobile }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.sideNav}>
      <h1 className={styles.navTitle}>Sea Wallet</h1>

      <div className={styles.navContainer}>
        <div className={styles.menuNavContainer}>
          {menuNav.map((menu, key) => {
            return (
              <>
                <div className={styles.menu}>
                  <NavLink to={menu.navTo}>
                    {
                      <menu.iconElement
                        color={isActive(menu.navTo) ? '#4D47C3' : '#95999E'}
                      />
                    }
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      clsx(styles.defaultColor, { [styles.isActive]: isActive })
                    }
                    to={menu.navTo}
                    key={key}
                  >
                    {menu.name}
                  </NavLink>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {isMobile && <I.UncollapseIcon />}
    </nav>
  );
};

export default SideNavbar;
