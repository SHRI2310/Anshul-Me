import express from "express";
import { redirect, statusCheck } from "../controllers/statusCheck.js";

const router = express.Router()

router.post("/redirect",redirect);
 router.post("/status",statusCheck)
export default router