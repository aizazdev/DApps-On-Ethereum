import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Paintings from '../contracts/PaitingsNFT.json';
import Web3 from 'web3';

export const initWeb3 = createAsyncThunk(
    'InitWeb3',
    async(data, thunkApi)=> {
        try {
            if(Web3.givenProvider) {
                const web3 = new Web3(Web3.givenProvider);
                await Web3.givenProvider.enable();
                const networdId = await web3.eth.net.getId();
                const network = Paintings.networks[networdId];
                const contract = new web3.eth.Contract(Paintings.abi, network.address);
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

export const addPainting = createAsyncThunk(
    'AddPainting',
    async(data, thunkApi)=> {
        const{contract, address} = thunkApi.getState().paintingReducer;
        const{name, price, description, path} = data;
        const response = await contract.methods.addPainting(name, price, path, description).send({from: address});
        console.log("respose ", response);   
    }
);

export const getAllPaintings = createAsyncThunk(
    'GetAllPaintings',
    async(data, thunkApi)=> {
        console.log("data", data);
        const{contract, address} = thunkApi.getState().paintingReducer;
        const res = await contract.methods.getPaintingById(1).call({value: 200, gas: 30000, gasPriceInWei : 1000});
        //const res = await contract.methods.name("aiixsx").send({from: address});
        console.log("res ", res);
    }
);

export const paintingSlice = createSlice({
    name: "painting",
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
    
    }
});

export const paintingReducer = paintingSlice.reducer;
export const {  } = paintingSlice.actions;