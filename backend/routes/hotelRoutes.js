import { Router } from "express";
import { getHotel } from "../controllers/hotelController.js";
const router = Router();
router.get("/", getHotel);
export default router;
