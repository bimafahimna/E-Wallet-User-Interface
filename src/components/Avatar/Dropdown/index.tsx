import React, { FC } from 'react';
import styles from './styles';
import { Logout, Profile } from 'src/assets/avatar';
import { NavLink } from 'react-router-dom';
import Modal from 'src/components/Modal';

const AvatarDropdown: FC = () => {
  return (
    <div className={styles.dropDown}>
      <div role="presentation" className={styles.menuContainer}>
        <img src={Profile} alt="Go to profile" />
        <div className={styles.menu}>Profile</div>
      </div>
      <div className={styles.menuContainer}>
        <img src={Logout} alt="logout" />
        <NavLink className={styles.menu} to="/login">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default AvatarDropdown;
