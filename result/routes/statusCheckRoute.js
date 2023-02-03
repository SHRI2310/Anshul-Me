import express from "express";
import { redirect } from "../controllers/statusCheck.js";

const router = express.Router()

router.post("/redirect",redirect);
export default router