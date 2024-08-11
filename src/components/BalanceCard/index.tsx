import React, { FC, useState } from 'react';
import { ShowPass } from 'src/assets/icon';
import styles from './styles';

interface Props {
  balance?: string;
  wallet_number?: string;
}

const BalanceCard: FC<Props> = ({ balance, wallet_number }) => {
  const [showBalance, setShowBalance] = useState<boolean>(false);

  return (
    <div className={styles.card}>
      <div className={styles.showPass}>
        <h3 className={styles.title}>Balance</h3>
        <button
          className={styles.btnShowPass}
          onClick={() => setShowBalance(!showBalance)}
        >
          <ShowPass />
        </button>
      </div>
      <div className={styles.balance}>
        IDR{' '}
        {!showBalance
          ? '********'
          : balance === undefined
          ? 'missing wallet'
          : balance}
      </div>
      <p className={styles.walletNumber}>
        {wallet_number === undefined ? 'missing wallet' : wallet_number}
      </p>
    </div>
  );
};

export default BalanceCard;
