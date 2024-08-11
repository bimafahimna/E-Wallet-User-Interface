import React, { FC } from 'react';
import styles from './styles';
import { Calculate } from 'src/assets/icon';
import { StonkUp, StonkDown } from 'src/assets/image';
import clsx from 'clsx';

interface Props {
  isIncome: boolean;
  nominal: string;
  desc: string;
}

const Widget: FC<Props> = ({ isIncome, nominal, desc }) => {
  return (
    <div
      className={clsx(styles.widget, {
        [styles.income]: isIncome,
        [styles.expense]: !isIncome,
      })}
    >
      <div className={styles.content}>
        <Calculate isIncome={isIncome} />
        <div className={styles.nominal}>{`IDR ${nominal}`}</div>
        <h3
          className={clsx(styles.widgetDesc, {
            [styles.incomeFont]: isIncome,
            [styles.expenseFont]: !isIncome,
          })}
        >
          {desc}
        </h3>
      </div>
      <img
        className={styles.img}
        src={isIncome ? StonkUp : StonkDown}
        alt={isIncome ? 'Income' : 'Expense'}
      />
    </div>
  );
};

export default Widget;
