import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useSelector, useDispatch} from 'react-redux';
import {addTransaction} from '../store/expenseTrackerSlice';

export const AddTransaction = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const {web3, contract, address,transactionLoading} = useSelector(state => state.expenseTrackerReducer);
  const dispatch = useDispatch();
  console.log("loading", transactionLoading);
  const onSubmit = async(e) => {
    e.preventDefault();
    let obj = {
        name, 
        price: Number(price)
    }
    dispatch(addTransaction(obj));
    console.log("price", price, name);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
        <TextField fullWidth type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        
      </Box><br />
      <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
        <TextField fullWidth type="number" label="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
      </Box>
      {(transactionLoading == true) ? "Loading" : 
      <button className="btn" >Add transaction</button>
      }
      </form>
    </>
  )
}
