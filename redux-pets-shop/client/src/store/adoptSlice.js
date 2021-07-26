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

export const removeAdoptPet = createAsyncThunk(
    'RemoveAdoptPet',
    async(petId, thunkApi)=> {
        const {contract, address} = thunkApi.getState().adoptReducer;
        const result = await contract.methods.removeAdopt(petId).send({from: address});
        return {
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
        rejectedPet: false,
        errorMessage: ""
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
            state.adopters[action.payload.petId] = action.payload.adopterAddress;
            state.loadingPet = false;
        },
        [removeAdoptPet.fulfilled]: (state, action) => {
            state.adopters[action.payload.petId] = "0x0000000000000000000000000000000000000000";
        },
        [adoptPet.pending]: (state, action)=> {
            state.loadingPet = true;
            state.rejectedPet = false;
        },
        [adoptPet.rejected]: (state, action)=> {
            state.rejectedPet = true;
            state.loadingPet = false;
            state.errorMessage = action.error.message
        },

    }
});

export const adoptReducer = adoptSlice.reducer;
export const { adopt } = adoptSlice.actions;