// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './buttonSlice';
import pdfReducer from './pdfSlice'; // <-- Import the PDF reducer

const store = configureStore({
  reducer: {
    buttons: buttonReducer,
    pdf: pdfReducer, 
  },
});

export default store;
