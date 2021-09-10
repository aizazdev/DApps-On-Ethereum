import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Paintings from '../contracts/PaitingsNFT.json';
import Web3 from 'web3';
import { ethers } from "ethers";

export const initWeb3 = createAsyncThunk(
    'InitWeb3',
    async(data, thunkApi)=> {
        try {
            if(ethers.providers) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                console.log("signer", signer);
                const network = (await provider.getNetwork()).ensAddress;
                console.log("network ", network);
                const contract = new ethers.Contract(network, Paintings.abi, provider);
                console.log("Contract ", await contract.printingsCount());
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
    name: "paintings",
    initialState: {
        contract: null,
        web3: null,
        address: null,
        paintings: null,
        response: null
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
        [addPainting.fulfilled]: (state, action) => {
            console.log("state, action", state, action);
            state.response = action.payload
        },
        [getAllPaintings.fulfilled]: (state, action) => {
            state.paintings = action.payload
        }
    }
});

export const paintingReducer = paintingSlice.reducer;
export const { adopt } = paintingSlice.actions;