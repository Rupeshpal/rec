import { createSlice } from '@reduxjs/toolkit';

export const pdfSlice = createSlice({
  name: 'pdf',
  initialState: {
    pdfFile: null,
  },
  reducers: {
    setPdfFile: (state, action) => {
      state.pdfFile = action.payload;
    },
  },
});

export const { setPdfFile } = pdfSlice.actions;

export default pdfSlice.reducer;
