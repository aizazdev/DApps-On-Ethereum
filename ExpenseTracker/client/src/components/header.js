import React from 'react'
import {useSelector} from 'react-redux';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export const Header = () => {
  const {web3, contract, address} = useSelector(state => state.expenseTrackerReducer);

  return (
    <h2>
      <Stack sx={{ width: '100%' }} spacing={2}>
        {(!web3) ? 
        <>
        <Alert severity="warning">
        <AlertTitle>Metamask Error</AlertTitle>
         warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Account Not Connected</AlertTitle>
        warning alert — <strong>check it out!</strong>
      </Alert>
        </> 
        : 
        <>
        <Alert severity="success">
        <AlertTitle>Metamask Connected</AlertTitle>
        success alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Account Connected</AlertTitle>
        success alert — <strong>Address { address }</strong>
      </Alert>
        </>
        }
      
    </Stack>
      Expense Tracker
    </h2>
  )
}
