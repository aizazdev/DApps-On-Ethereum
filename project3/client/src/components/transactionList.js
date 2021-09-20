import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {transactionList, transactionCount} from '../store/expenseTrackerSlice';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TransactionList = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const {web3, contract, address, count, transactionLoading, list} = useSelector(state => state.expenseTrackerReducer);
  const dispatch = useDispatch();
  
  setTimeout(()=>{ 
    dispatch(transactionCount());
    dispatch(transactionList({count: Number(count)}));
    console.log("2");
   }, 1000);

  return (
    <>
      <h3>History</h3>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Owner</StyledTableCell>
          </TableRow>
        </TableHead>
        {(list == "") ? "loading" : 
        list.map(({text, price, owner})=> {
          return(
            <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {text}
              </TableCell>
              <TableCell align="right">{price}</TableCell>
              <TableCell align="right">{owner}</TableCell>
             </TableRow>         
          </TableBody>  
          )
        })}
        
      </Table>
    </TableContainer>      

    </>
  )
}