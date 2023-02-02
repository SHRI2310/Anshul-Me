import express from "express"
import {  showAllques} from "../controllers/questionController.js"

const router = express.Router()

router.get("/showQue",showAllques)



export default router
