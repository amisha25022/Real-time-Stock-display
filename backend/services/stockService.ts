import axios from "axios";
import StockData from "../models/StockData";
require("dotenv").config();

const POLL_INTERVAL = 5000; // 5 seconds

export const fetchStockData = async () => {
  const symbols = ["GOOG", "BTC", "AAPL", "ETH", "AMZN"]; // Example symbols
  for (const symbol of symbols) {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol.toLowerCase()}&interval=1min&apikey=${
          process.env.API_KEY
        }`
      );
      console.log(`API response for ${symbol}:`, response.data);

      const timeSeries = response.data["Time Series (1min)"];
      if (!timeSeries) {
        console.error(`No time series data for ${symbol}`);
        continue;
      }
      for (let i = 0; i < 20; i++) {
        const latestTimestamp = Object.keys(timeSeries)[i];
        const latestData = timeSeries[latestTimestamp];
        const open = parseFloat(latestData["1. open"]);
        const close = parseFloat(latestData["4. close"]);

        await StockData.create({
          symbol,
          open,
          close,
          timestamp: new Date(latestTimestamp),
        });
      }
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
    }
  }
};

setInterval(fetchStockData, POLL_INTERVAL);
fetchStockData(); // Fetch immediately on start
