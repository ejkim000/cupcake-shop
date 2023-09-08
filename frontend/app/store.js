import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import itemReducer from '../features/item/itemSlice';
import sizeReducer from '../features/size/sizeSlice';

const store = configureStore({
  reducer : {
    auth: authReducer,
    items: itemReducer,
    sizes: sizeReducer
  },
});

export default store;