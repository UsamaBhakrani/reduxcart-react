import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../CartItems";

export const cartSlice = createSlice({
  name: "cart",
  initialState: CartItems,
  reducers: {
    increase: (state, action) => {
      const newState = state.map((s) => {
        if (s.id === action.payload) {
          return s.amount + 1;
        }
      })
    },
    decrease: (state, action) => {},
  },
});

export const { increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
