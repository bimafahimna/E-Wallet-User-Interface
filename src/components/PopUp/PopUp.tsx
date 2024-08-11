import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import styles from './styles';

interface Props {
  children: ReactNode;
  isSuccess: boolean;
  isShown?: boolean;
}

const PopUp: FC<Props> = ({ children, isSuccess, isShown }) => {
  return (
    <div
      className={clsx(
        styles.default,
        { [styles.show]: isShown },
        {
          [styles.success]: isSuccess,
          [styles.failed]: !isSuccess,
        },
      )}
    >
      {children}
    </div>
  );
};

export default PopUp;
