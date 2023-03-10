import express from "express"
import {  finalQuote, insuranceApi ,filterApi, getLeads,dateFilter } from "../controllers/insuranceController.js"
import { isAuthenticated } from "../middleware/auth.js"

const router = express.Router()

router.post("/createQuote",insuranceApi)
router.get("/getLeads", getLeads)
router.post("/filter",isAuthenticated,filterApi)
router.post("/dateFilter",dateFilter)
// router.get("/students/:Id/result",getStudent)
// router.get("/del", deleteAll)
router.post("/fQuote",finalQuote)


export default router
