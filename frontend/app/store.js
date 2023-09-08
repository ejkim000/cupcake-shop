import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import itemReducer from '../features/item/itemSlice';

const store = configureStore({
  reducer : {
    auth: authReducer,
    items: itemReducer
  },
});

export default store;