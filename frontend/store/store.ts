import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./reducers/stockReducer";

// Function to safely get the symbol from localStorage
const getSymbolFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("symbol") || "GOOG";
  }
  return "GOOG";
};

const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
  preloadedState: {
    stock: {
      symbol: getSymbolFromLocalStorage(),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
