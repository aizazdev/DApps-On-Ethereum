import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { expenseTrackerReducer } from './expenseTrackerSlice';

export const store = configureStore({
    
  reducer: {  
      expenseTrackerReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})