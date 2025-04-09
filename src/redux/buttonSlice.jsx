// src/redux/buttonSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for buttons
const initialState = {
  button1: { label: 'Add Patient', isActive: true },
  button2: { label: 'Button 2', isActive: false },
  button3: { label: 'Button 3', isActive: true },
  button4: { label: 'Button 4', isActive: false },
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
  },
});

// Export actions
export const { toggleButton, setButtonLabel } = buttonSlice.actions;

// Export reducer
export default buttonSlice.reducer;
