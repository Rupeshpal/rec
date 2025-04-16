import { createSlice } from '@reduxjs/toolkit';

// Initial state for buttons
const initialState = {
  button1: { label: 'Add Patient', isActive: true, loading: false },
  button2: { label: 'Load', isActive: false, loading: false },
  button3: { label: 'Button 3', isActive: true, loading: false },
  button4: { label: 'Button 4', isActive: false, loading: false },
};

const buttonSlice = createSlice({
  name: 'buttons',
  initialState,
  reducers: {
    toggleButton: (state, action) => {
      const { buttonId } = action.payload;
      if (state[buttonId]) {
        state[buttonId].isActive = !state[buttonId].isActive;
      }
    },
    setButtonLabel: (state, action) => {
      const { buttonId, label } = action.payload;
      if (state[buttonId]) {
        state[buttonId].label = label;
      }
    },
    setLoading: (state, action) => {
      const { buttonId, loading } = action.payload;
      if (state[buttonId]) {
        state[buttonId].loading = loading;
      }
    },
  },
});

// Export actions
export const { toggleButton, setButtonLabel, setLoading } = buttonSlice.actions;
export default buttonSlice.reducer;
