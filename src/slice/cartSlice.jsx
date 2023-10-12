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
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { increaseAmount, decreaseAmount, clearCart, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
