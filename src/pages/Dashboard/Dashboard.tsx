import React, { FC, useEffect } from 'react';
import styles from './styles';
import Widget from 'src/components/Widget';
import BalanceCard from 'src/components/BalanceCard';
import TransactionCard from 'src/components/TransactionCard';
import { getMe } from 'src/store/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';

const Dashboard: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { dataUserProfile } = useSelector(
    (state: RootState) => state.profileReducer,
  );

  const getDataUserProfile = async () => {
    try {
      await dispatch(getMe());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataUserProfile();
  }, []);

  return (
    <>
      <div className={styles.contentContainer}>
        <h2 className={styles.h2Text}>Hello, {dataUserProfile?.name}!</h2>
        <div className={styles.cardContainer}>
          <BalanceCard
            balance={dataUserProfile?.amount}
            wallet_number={dataUserProfile?.wallet_number}
          />
          <Widget nominal="750,000" desc="Income - April 2024" isIncome={true} />
          <Widget nominal="1,250,000" desc="Expense - April 2024" isIncome={false} />
        </div>
        <div>
          <h2 className={styles.h2Text}>Recent Transactions</h2>
          <p className={styles.recentDesc}>This Week</p>
          <div className={styles.transactionCardContainer}>
            <TransactionCard isIncome={true} />
            <TransactionCard isIncome={false} />
            <TransactionCard isIncome={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
