// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './buttonSlice';

const store = configureStore({
  reducer: {
    buttons: buttonReducer,
  },
});

export default store;
