import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Web3 from 'web3';

export const initWeb3 = createAsyncThunk(
    'InitWeb3',
    async()=> {
        if(Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            return web3;
        } else {
            console.log("error in web3  ");
        }
    }
);
export const adoptSlice = createSlice({
    name: "adoption",
    initialState: {
        contract: '',
        web3: ''
    },
    reducers: {
        adopt: ()=> {

        },
    },
    extraReducers: {
        [initWeb3.fulfilled]: (state, action)=> {
            console.log(state.web3);
            state.web3 = action.payload
        }
    }
});

export const adoptReducer = adoptSlice.reducer;
export const { adopt } = adoptSlice.actions;