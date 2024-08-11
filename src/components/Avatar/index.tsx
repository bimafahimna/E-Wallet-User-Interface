import React, { FC, useState } from 'react';
import { AvatarImg } from 'src/assets/avatar';
import styles from './styles';
import AvatarDropdown from './Dropdown';

const Avatar: FC = () => {
  const [showProfileDropDown, setShowProfileDropDown] = useState<boolean>(false);

  const handleClick = () => {
    setShowProfileDropDown(!showProfileDropDown);
  };

  return (
    <div
      className={styles.avatarContainer}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={handleClick}
    >
      <img src={AvatarImg} alt="Avatar" />
      {showProfileDropDown && <AvatarDropdown />}
    </div>
  );
};

export default Avatar;
