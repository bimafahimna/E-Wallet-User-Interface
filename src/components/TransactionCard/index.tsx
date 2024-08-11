import React, { FC } from 'react';
import { Calculate } from 'src/assets/icon';
import styles from './styles';
import clsx from 'clsx';

interface Props {
  isIncome: boolean;
}

const TransactionCard: FC<Props> = ({ isIncome }) => {
  return (
    <div className={styles.container}>
      <Calculate isIncome={isIncome} />
      <p className={styles.text}>Top up from Credit Card</p>
      <p className={styles.text}>13 November 20</p>
      <p className={clsx(styles.text, isIncome ? styles.income : styles.expense)}>
        IDR 250,5000
      </p>
    </div>
  );
};

export default TransactionCard;
