import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { expenseTrackerReducer, initWeb3 } from './store/expenseTrackerSlice';
import ExpenseTracker from './contracts/ExpenseTracker.json';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpense';
import { TransactionList } from './components/transactionList';
import { AddTransaction } from './components/addTransaction';
import Web3 from 'web3';

function App() {

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(initWeb3());
  }, []);

  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
