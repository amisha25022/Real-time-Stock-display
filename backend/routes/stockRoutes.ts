import { Router } from "express";
import { getStockData } from "../controllers/stockController";

const router = Router();

router.get("/", getStockData);
console.log("hhhhhhhhhh");


export default router;
