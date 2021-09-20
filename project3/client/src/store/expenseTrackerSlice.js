import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ExpenseTracker from '../contracts/ExpenseTracker.json';
import Web3 from 'web3';

export const initWeb3 = createAsyncThunk(
    'InitWeb3',
    async(data, thunkApi)=> {
        try {
            if(Web3.givenProvider) {
                const web3 = new Web3(Web3.givenProvider);
                await Web3.givenProvider.enable();
                const networdId = await web3.eth.net.getId();
                const network = ExpenseTracker.networks[networdId];
                const contract = new web3.eth.Contract(ExpenseTracker.abi, network.address);
                const addresses = await web3.eth.getAccounts();
                               
                return {
                    web3,
                    contract,
                    address: addresses[0]
                }
    
            } else {
                console.log("error in web3  ");
            }
        } catch(error) {
            console.log("Error in loading blockchain");
        }
    }
);

export const addTransaction = createAsyncThunk(
    'addTransaction',
    async({name, price}, thunkApi) => {
        const {contract, address} = thunkApi.getState().expenseTrackerReducer;
        const result = contract.methods.setTransaction(name, price).send({from: address});
        return {

        }
    }
);


export const transactionCount = createAsyncThunk(
    'transactionCount',
    async(data, thunkApi)=> {
        const{contract, address} = thunkApi.getState().expenseTrackerReducer;
        const result = await contract.methods.count().call();
        return {
            count: result
        }
    }
);

export const transactionList = createAsyncThunk(
    'transactionList',
    async({count}, thunkApi)=> {
        const{contract, address} = thunkApi.getState().expenseTrackerReducer;
        let list = [];
        for(let i=0; i<count; i++) {
            const {price, transactionDescription: text, transactionOwner: owner} = await contract.methods.transactions(i).call();
            let obj = {
                price,
                text,
                owner
            }
            list.push(obj);
        }
        return {
            list
        }
    }
);
export const expenseTrackerSlice = createSlice({
    name: "adoption",
    initialState: {
        contract: null,
        web3: null,
        address: null,
        list: [],
        transactionLoading: false,
        count: null
    },
    reducers: {
        adopt: ()=> {

        },
    },
    extraReducers: {
        [initWeb3.fulfilled]: (state, action)=> {
            state.web3 = action.payload.web3;
            state.contract = action.payload.contract;
            state.address = action.payload.address;
        },
        [addTransaction.fulfilled]: (state, action) => {
             state.transactionLoading = false
        },
        [addTransaction.pending]: (state, action)=> {
            state.transactionLoading = true
        },
        [transactionCount.fulfilled]: (state, action) => {
            state.count = action.payload.count
        },
        [transactionList.fulfilled]: (state, action) => {
            state.list = action.payload.list
        },
    }
});

export const expenseTrackerReducer = expenseTrackerSlice.reducer;
export const {  } = expenseTrackerSlice.actions;