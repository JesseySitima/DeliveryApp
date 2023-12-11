// dishesReducer.js

const initialState = {
    selectedDishes: {},
  };
  
  const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DISH':
        const { dishId, quantity } = action.payload;
        return {
          ...state,
          selectedDishes: {
            ...state.selectedDishes,
            [dishId]: (state.selectedDishes[dishId] || 0) + quantity,
          },
        };
      case 'REMOVE_DISH':
        // Handle removing a dish if needed
        // Example: Remove dish by dishId
        // const { [action.payload]: deletedItem, ...updatedSelectedDishes } = state.selectedDishes;
        return {
          ...state,
          // selectedDishes: updatedSelectedDishes,
        };
      default:
        return state;
    }
  };
  
  export default dishesReducer;
  