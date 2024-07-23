import express from "express";
import cors from "cors";
import stockRoutes from "./routes/stockRoutes";
import "./config/db";
import { fetchStockData } from "./services/stockService";

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
fetchStockData();
app.use(cors());
app.use(express.json());
app.use("/api/stocks", stockRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
