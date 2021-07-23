import {createSlice} from '@reduxjs/toolkit';

const initialState = [{
  id: '123',
  title: 'Blue t-shirt',
  description: 'No fancy sizing charts here, one t-shirt size to rule them all',
  imageUrl: '/blue-tshirt.png',
  price: 399
},
{
  id: '456',
  title: 'Yellow t-shirt',
  description:
      'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
  imageUrl: '/yellow-tshirt.png',
  price: 499
},
{
  id: '789',
  title: 'Red t-shirt',
  description: 'The only product on our site that might actually be worth buying',
  imageUrl: '/red-tshirt.png',
  price: 799
  }];
  
  export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      ADD_TO_CART: (state, {payload: {payload}}) => {
        //console.log(state[0].id == payload);
        return state.map((item)=> {
          if(item.id !== payload) {
            return item
          }
          return {
            ...item, 
            added: true
          }
        })
      },
      REMOVE_FROM_CART: (state, {payload}) => {
        console.log(state, payload);
        return state.map((item)=> {
          if(item.id !== payload) {
            return item
          }
          return {
            ...item, 
            added: false
          }
        })
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { ADD_TO_CART, REMOVE_FROM_CART } = productSlice.actions
  
  export default productSlice.reducer