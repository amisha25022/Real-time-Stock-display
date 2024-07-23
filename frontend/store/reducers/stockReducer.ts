import { createReducer } from "@reduxjs/toolkit";
import { setSymbol } from "../actions/stockActions";

interface StockState {
  symbol: string;
}

const initialState: StockState = {
  symbol: "GOOG",
};

const stockReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSymbol, (state, action) => {
    state.symbol = action.payload;
    localStorage.setItem("symbol", action.payload);
  });
});

export default stockReducer;
