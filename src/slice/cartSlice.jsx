import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
  },
  reducers: {
    increaseAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount - 1;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTotals: (state) => {
      console.log(state)
    },
  },
});

export const {
  increaseAmount,
  decreaseAmount,
  clearCart,
  removeItem,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
