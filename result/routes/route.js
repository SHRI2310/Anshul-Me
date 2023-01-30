import express from "express"
import {  finalQuote, insuranceApi } from "../controllers/insuranceController.js"

const router = express.Router()

router.post("/createQuote",insuranceApi)
// router.post("/test",test)
// router.get("/students/:Id/result",getStudent)
// router.get("/del", deleteAll)
router.post("/fQuote",finalQuote)
export default router
