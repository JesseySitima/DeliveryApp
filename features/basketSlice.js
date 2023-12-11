// basketSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDishes: {}, // This will store the selected dishes and their quantities
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const { dishId, quantity } = action.payload;
      state.selectedDishes[dishId] = (state.selectedDishes[dishId] || 0) + quantity;
      console.log('Added dish', dishId, 'Quantity:', state.selectedDishes[dishId]);
    },
    removeDish: (state, action) => {
      const { dishId, quantity } = action.payload;
      if (state.selectedDishes[dishId] > 0) {
        state.selectedDishes[dishId] -= quantity;
        console.log('Removed dish', dishId, 'Quantity:', state.selectedDishes[dishId]);
      }
      // Handle removing a dish completely if needed
      // Example: delete state.selectedDishes[dishId] to remove completely
    },
    // Define other actions if needed
  },
});

export const { addDish, removeDish } = basketSlice.actions;

export const selectSelectedDishes = (state) => state.basket.selectedDishes;

export default basketSlice.reducer;
