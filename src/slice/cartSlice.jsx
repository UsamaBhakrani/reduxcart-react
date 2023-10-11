import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../CartItems";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: CartItems,
    amount: 0,
    total: 0,
    isLoading: true,
  },
  reducers: {
    increase: (state, action) => {},
    decrease: (state, action) => {},
  },
});

export const { increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
