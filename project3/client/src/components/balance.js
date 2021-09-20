import React from 'react';
import {useSelector} from 'react-redux';

export const Balance = () => {

  const {list} = useSelector(state => state.expenseTrackerReducer);

  const amounts = list.map(list => Number(list.price));
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
        <h1>${total}</h1>
    </>
  )
}

