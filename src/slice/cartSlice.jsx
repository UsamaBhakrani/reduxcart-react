import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-projects";

export const getCartItems = createAsyncThunk(
  "/cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
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
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    });
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
