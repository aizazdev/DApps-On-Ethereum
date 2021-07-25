import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Adoption from '../contracts/Adoption.json';
import Web3 from 'web3';

export const initWeb3 = createAsyncThunk(
    'InitWeb3',
    async(data, thunkApi)=> {
        try {
            if(Web3.givenProvider) {
                const web3 = new Web3(Web3.givenProvider);
                await Web3.givenProvider.enable();
                const networdId = await web3.eth.net.getId();
                const network = Adoption.networks[networdId];
                const contract = new web3.eth.Contract(Adoption.abi, network.address);
                const addresses = await web3.eth.getAccounts();
                thunkApi.dispatch(loadAdopters({
                    contract: contract,
                    address: addresses[0]
                }));                
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

export const adoptPet = createAsyncThunk(
    'AdoptPet',
    async(petId, thunkApi)=> {
        
        const {contract, address} = thunkApi.getState().adoptReducer;
        const result = await contract.methods.adopt(petId).send({from: address});
        return {
            adopterAddress: result.from,
            petId
        }
    }
);

export const loadAdopters = createAsyncThunk(
    'loadAdopters',
    async(data, thunkApi)=> {
        try {
            const adoptersList = data.contract.methods.adopters().call();
            return adoptersList;
        } catch(Error) {
            console.log("Error on loading adopters");
        }
    }
);
export const adoptSlice = createSlice({
    name: "adoption",
    initialState: {
        contract: null,
        web3: null,
        address: null,
        adopters:[],
        loadingPet: false,
        rejectedPet: false
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
        [loadAdopters.fulfilled]: (state, action)=> {
            state.adopters = action.payload
        },
        [adoptPet.fulfilled]: (state, action)=> {
            state.adopters[action.payload.petId] = action.payload.adopterAddress
        },
        [adoptPet.pending]: (state, action)=> {
            state.loadingPet = true
        },
        [adoptPet.rejected]: (state, action)=> {
            state.rejectedPet = true
        }
    }
});

export const adoptReducer = adoptSlice.reducer;
export const { adopt } = adoptSlice.actions;