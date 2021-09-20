import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { paintingReducer } from './paintingSlice';

export const store = configureStore({
    
  reducer: {  
      paintingReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})