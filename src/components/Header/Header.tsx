import React, { FC } from 'react';
import styles from './styles';
import Avatar from '../Avatar';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <Avatar />
    </header>
  );
};

export default Header;
