import express from "express"
import { insuranceApi } from "../controllers/insuranceController.js"

const router = express.Router()

router.post("/createQuote",insuranceApi)
// router.get("/students/:Id/result",getStudent)
// router.get("/students", result)
export default router
