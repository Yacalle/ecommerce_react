import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice.js";
import userReducer from "../features/UserSlice.js";
export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
