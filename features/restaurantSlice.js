import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  restaurant: {
    id: null,
    imgurl: null,
    title: null,
    rating: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

// Selector function for getting basket items by ID
export const selectRestaurant = (state) => state.restaurant.restaurant;



export default restaurantSlice.reducer;
