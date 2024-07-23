import mongoose from "mongoose";

const StockDataSchema = new mongoose.Schema({
  symbol: String,
  open: Number,
  close: Number,
  timestamp: { type: Date, default: Date.now },
});

const StockData = mongoose.model("StockData", StockDataSchema);
console.log("StockData...........", StockData);

export default StockData;
