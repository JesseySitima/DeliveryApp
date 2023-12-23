import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDishes: {}, // This will store the selected dishes and their quantities
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const { dishId, quantity, name, price, imageUrl } = action.payload;
      if (!state.selectedDishes[dishId]) {
        state.selectedDishes[dishId] = {
          quantity,
          name,
          price,
          imageUrl,
        };
      } else {
        state.selectedDishes[dishId] = {
          ...state.selectedDishes[dishId],
          quantity: state.selectedDishes[dishId].quantity + quantity,
        };
      }
      console.log('Added dish', dishId, 'Quantity:', state.selectedDishes[dishId].quantity);
    },
    removeDish: (state, action) => {
      const { dishId, quantity } = action.payload;
      if (state.selectedDishes[dishId]) {
        if (state.selectedDishes[dishId].quantity > quantity) {
          state.selectedDishes[dishId] = {
            ...state.selectedDishes[dishId],
            quantity: state.selectedDishes[dishId].quantity - quantity,
          };
        } else {
          delete state.selectedDishes[dishId];
        }
        console.log('Removed dish', dishId);
      }
    },
    // Define other actions if needed
  },
});

export const { addDish, removeDish } = basketSlice.actions;

export const selectSelectedDishes = (state) => state.basket.selectedDishes;

export default basketSlice.reducer;
