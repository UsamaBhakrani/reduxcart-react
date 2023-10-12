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
    increaseAmount: (state, action) => {},
    decreaseAmount: (state, action) => {},
  },
});

export const { increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
