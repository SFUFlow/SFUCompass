import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./auth-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {  ui: uiReducer, cart: cartReducer },
});

export default store;
