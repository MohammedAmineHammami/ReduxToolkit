import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice.js";

export const store = configureStore({
  reducer: {
    productsRed: productReducer,
  },
});
