import { Request, Response } from "express";
import StockData from "../models/StockData";

export const getStockData = async (req: Request, res: Response) => {
  const { symbol } = req.query;
  console.log("symbol", symbol);

  if (!symbol) {
    return res
      .status(400)
      .json({ error: "Symbol query parameter is required" });
  }
  const data = await StockData.find({ symbol })
    .sort({ timestamp: -1 })
    .limit(20);
  res.json(data);
};
