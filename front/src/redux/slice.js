import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./asyncThunk";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  cart: [],
  wishList: [],
  total: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload.items;
      state.total = action.payload.total;
    },
    removeFromCart: (state, action) => {
      state.cart = action.payload.items;
      state.total -= action.payload.price;
    },
    addToWishList: (state, action) => {
      state.wishList = action.payload;
    },
    removeFromWishList: (state, action) => {
      state.wishList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        console.log(action);
      });
  },
});
export const { addToCart, addToWishList, removeFromWishList, removeFromCart } =
  productSlice.actions;
export default productSlice.reducer;
